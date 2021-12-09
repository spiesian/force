import { Box, Button, Flex, Spacer, Sup, Text } from "@artsy/palette"
import { useState, FC } from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { SettingsEditSettingsTwoFactorAppAuthenticator_me } from "v2/__generated__/SettingsEditSettingsTwoFactorAppAuthenticator_me.graphql"
import { ConfirmPasswordModal } from "v2/Components/ConfirmPasswordModal"
import { SettingsEditSettingsTwoFactorAppAuthenticatorSetup } from "./SettingsEditSettingsTwoFactorAppAuthenticatorSetup"
import { useCreateSettingsAppSecondFactor } from "./useCreateSettingsAppSecondFactorMutation"

enum Mode {
  Pending,
  Disable,
  Disabling,
  Password,
  Creating,
  Setup,
  Complete,
  Redirect,
}

export interface SecondFactor {
  internalID: string
  otpSecret: string | null
  otpProvisioningURI: string | null
  name: string | null
}

interface SettingsEditSettingsTwoFactorAppAuthenticatorProps {
  me: SettingsEditSettingsTwoFactorAppAuthenticator_me
}

export const SettingsEditSettingsTwoFactorAppAuthenticator: FC<SettingsEditSettingsTwoFactorAppAuthenticatorProps> = ({
  me,
}) => {
  const [mode, setMode] = useState(Mode.Pending)

  const [
    stagedAppSecondFactor,
    setStagedAppSecondFactor,
  ] = useState<SecondFactor | null>(null)

  const {
    submitMutation: submitCreateSettingsAppSecondFactor,
  } = useCreateSettingsAppSecondFactor()

  const enabledSecondFactorName =
    me.appSecondFactors?.length &&
    me.appSecondFactors[0]?.__typename === "AppSecondFactor"
      ? me.appSecondFactors[0].name
      : null

  const isEnabled = !!enabledSecondFactorName

  const handleClick = () => {
    setMode(Mode.Password)
  }

  const handleCancel = () => {
    setMode(Mode.Pending)
  }

  const handleConfirm = async (password: string) => {
    setMode(Mode.Creating)

    try {
      const response = await submitCreateSettingsAppSecondFactor({
        input: { attributes: {}, password },
      })

      if (
        response.createAppSecondFactor?.secondFactorOrErrors.__typename !==
        "AppSecondFactor"
      ) {
        throw new Error("Something went wrong")
      }

      setStagedAppSecondFactor(
        response.createAppSecondFactor?.secondFactorOrErrors
      )

      setMode(Mode.Setup)
    } catch (error) {
      // TODO: Handle errors
      console.error(error)

      setMode(Mode.Pending)
    }
  }

  return (
    <>
      <Flex
        p={2}
        border="1px solid"
        borderColor="black10"
        flexDirection={["column", "row"]}
      >
        <Box flexBasis="50%">
          <Text variant="lg" mb={2}>
            App Authenticator
            {enabledSecondFactorName && (
              <>
                {" "}
                <Sup color="black60">
                  {enabledSecondFactorName || "Unnamed"}
                </Sup>
              </>
            )}
          </Text>

          <Text variant="sm" color="black60">
            Generate secure authentication codes using an application such as{" "}
            <a
              href="https://support.1password.com/one-time-passwords"
              target="_blank"
              rel="noopener noreferrer"
            >
              1Password
            </a>{" "}
            or{" "}
            <a
              href="https://authy.com/features"
              target="_blank"
              rel="noopener noreferrer"
            >
              Authy
            </a>
            .
          </Text>
        </Box>

        <Spacer ml={[0, 2]} mt={[2, 0]} />

        <Flex flexBasis="50%" alignItems="center" justifyContent="flex-end">
          {isEnabled ? (
            <>
              <Button variant="secondaryOutline" width={["100%", "auto"]}>
                Disable
              </Button>

              <Spacer ml={1} />

              <Button
                variant="secondaryGray"
                width={["100%", "auto"]}
                onClick={handleClick}
              >
                Edit
              </Button>
            </>
          ) : (
            <Button
              variant="secondaryOutline"
              width={["100%", "auto"]}
              onClick={handleClick}
            >
              Set up
            </Button>
          )}
        </Flex>
      </Flex>

      {/* Modals */}

      {/*
      <SettingsEditSettingsTwoFactorAppAuthenticatorModal
        show={showSetupModal}
        secondFactor={stagedSecondFactor}
        onComplete={onComplete}
        onClose={() => setShowSetupModal(false)}
      />
      <ApiErrorModal
        onClose={() => setApiErrors([])}
        show={!!apiErrors.length}
        errors={apiErrors}
      />
      <Modal
        title="Set up with app"
        onClose={onCompleteConfirmed}
        show={showCompleteModal}
        hideCloseButton={!me.hasSecondFactorEnabled}
        FixedButton={
          <Button onClick={onCompleteConfirmed} width="100%">
            {me.hasSecondFactorEnabled ? "OK" : "Log back in"}
          </Button>
        }
      >
        <Text size="3t" color="black60">
          You’ve successfully set up two-factor authentication!
        </Text>
        {!me.hasSecondFactorEnabled && (
          <Serif mt={2} size="3t" color="black60">
            You will be logged out of this session and prompted to enter a
            two-factor authentication code.
          </Serif>
        )}
      </Modal>
      <OnCompleteRedirectModal
        onClick={onCompleteRedirect}
        redirectTo={redirectTo}
        show={showCompleteRedirectModal}
      /> */}

      {mode === Mode.Setup && stagedAppSecondFactor && (
        <SettingsEditSettingsTwoFactorAppAuthenticatorSetup
          secondFactor={stagedAppSecondFactor}
          onComplete={() => {
            // TODO
          }}
          onClose={handleCancel}
        />
      )}

      {mode === Mode.Password && (
        <ConfirmPasswordModal
          show
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          title="Set up with app"
          subTitle="Confirm your password to continue."
        />
      )}

      {isEnabled && (
        // <DisableFactorConfirmation
        //   show={showConfirmDisable}
        //   onConfirm={onDisableSecondFactor}
        //   onCancel={() => setShowConfirmDisable(false)}
        //   secondFactorID={me.appSecondFactors[0].internalID}
        // />
        <>{/* TODO */}</>
      )}
    </>
  )
}

export const SettingsEditSettingsTwoFactorAppAuthenticatorFragmentContainer = createFragmentContainer(
  SettingsEditSettingsTwoFactorAppAuthenticator,
  {
    me: graphql`
      fragment SettingsEditSettingsTwoFactorAppAuthenticator_me on Me {
        hasSecondFactorEnabled

        appSecondFactors: secondFactors(kinds: [app]) {
          ... on AppSecondFactor {
            __typename
            internalID
            name
          }
        }
      }
    `,
  }
)
