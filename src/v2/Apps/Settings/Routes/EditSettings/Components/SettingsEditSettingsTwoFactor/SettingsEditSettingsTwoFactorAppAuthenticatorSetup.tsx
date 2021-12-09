import {
  Banner,
  Box,
  Button,
  Column,
  GridColumns,
  Input,
  Join,
  ModalDialog,
  Spacer,
  Text,
} from "@artsy/palette"
import { Form, Formik } from "formik"
import QRCode from "qrcode.react"
import { useState, FC } from "react"
import * as Yup from "yup"
import { useEnableSettingsAppSecondFactor } from "./useEnableSettingsAppSecondFactorMutation"
import { useUpdateSettingsAppSecondFactor } from "./useUpdateSettingsAppSecondFactorMutation"
import { SecondFactor } from "./SettingsEditSettingsTwoFactorAppAuthenticator"

enum Mode {
  Closed, // TODO
  Pending,
  Saving,
  Error,
  Success,
}

const PRESENCE_REGEX = /.*\S+.*/

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Enter a name")
    .matches(PRESENCE_REGEX, "Enter a name"),
  code: Yup.string()
    .required("Enter a code")
    .matches(PRESENCE_REGEX, "Enter a code"),
})

interface SettingsEditSettingsTwoFactorAppAuthenticatorSetupProps {
  onClose: () => void
  onComplete: () => void
  secondFactor: SecondFactor
}

export const SettingsEditSettingsTwoFactorAppAuthenticatorSetup: FC<SettingsEditSettingsTwoFactorAppAuthenticatorSetupProps> = ({
  onClose,
  onComplete,
  secondFactor,
}) => {
  const [showSecret, setShowSecret] = useState(false)
  const [recoveryCodes, setRecoveryCodes] = useState<string[]>([])
  const [mode, setMode] = useState(Mode.Pending)

  const {
    submitMutation: submitEnableSecondFactor,
  } = useEnableSettingsAppSecondFactor()

  const {
    submitMutation: submitUpdateSecondFactor,
  } = useUpdateSettingsAppSecondFactor()

  return (
    <>
      {mode !== Mode.Success ? (
        <ModalDialog width={440} title="Set up with app" onClose={onClose}>
          <Formik
            validationSchema={validationSchema}
            initialValues={{ name: secondFactor.name ?? "", code: "" }}
            onSubmit={async (values, formikHelpers) => {
              setMode(Mode.Saving)

              formikHelpers.setStatus(null)

              try {
                await submitUpdateSecondFactor(
                  {
                    input: {
                      attributes: { name: values.name },
                      secondFactorID: secondFactor.internalID,
                    },
                  },
                  {
                    checkForErrors: res => {
                      const orErrors =
                        res.updateAppSecondFactor?.secondFactorOrErrors
                      if (orErrors?.__typename === "Errors") {
                        return orErrors.errors
                      }
                    },
                  }
                )

                const { enableSecondFactor } = await submitEnableSecondFactor(
                  {
                    input: {
                      code: values.code,
                      secondFactorID: secondFactor.internalID,
                    },
                  },
                  {
                    checkForErrors: res => {
                      const orErrors =
                        res.enableSecondFactor?.secondFactorOrErrors
                      if (orErrors?.__typename === "Errors") {
                        return orErrors.errors
                      }
                    },
                  }
                )

                setRecoveryCodes([...(enableSecondFactor?.recoveryCodes ?? [])])
                setMode(Mode.Success)
              } catch (err) {
                console.error(err)

                setMode(Mode.Error)

                formikHelpers.setStatus(err[0].message)
              }
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              isSubmitting,
              values,
              status,
            }) => {
              return (
                <Form>
                  <Join separator={<Spacer mt={2} />}>
                    <Text variant="sm" color="black60">
                      An authenticator app lets you generate security codes.
                    </Text>

                    <Input
                      autoComplete="off"
                      autoFocus
                      error={errors.name}
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Device Name"
                      value={values.name}
                    />

                    <Text variant="sm" color="black60">
                      1. Use your app to scan the code below. If you can’t use a
                      barcode, enter the secret code manually.
                    </Text>

                    {secondFactor.otpProvisioningURI && (
                      <Box textAlign="center">
                        <QRCode
                          size={256}
                          value={secondFactor.otpProvisioningURI}
                        />
                      </Box>
                    )}

                    <Box textAlign="center">
                      {showSecret ? (
                        <Text variant="sm">{secondFactor.otpSecret}</Text>
                      ) : (
                        <Button
                          size="small"
                          variant="secondaryGray"
                          onClick={() => setShowSecret(true)}
                        >
                          Show secret
                        </Button>
                      )}
                    </Box>

                    <Text variant="sm" color="black60">
                      2. Enter the six-digit code from the application to
                      complete the configuration.
                    </Text>

                    <Input
                      error={errors.code}
                      onBlur={handleBlur}
                      autoComplete="off"
                      name="code"
                      value={values.code}
                      onChange={handleChange}
                      placeholder="Authentication Code"
                    />

                    {status && <Banner variant="error">{status}</Banner>}

                    <Button
                      loading={isSubmitting}
                      disabled={isSubmitting}
                      width="100%"
                      type="submit"
                    >
                      Turn On
                    </Button>
                  </Join>
                </Form>
              )
            }}
          </Formik>
        </ModalDialog>
      ) : (
        <ModalDialog
          width={440}
          title="Recovery Codes"
          onClose={onComplete}
          footer={
            <Button onClick={onComplete} width="100%">
              Next
            </Button>
          }
        >
          <Join separator={<Spacer mt={2} />}>
            <Text variant="sm" color="black60">
              You can use these one-time codes to access your account if you
              lose access to your authenticator application.
              {/* TODO: */}
              {/* {secondFactor.__typename === "AppSecondFactor"
                ? "authenticator application"
                : "phone"} */}
              .
            </Text>

            <Text variant="sm" color="black60">
              Treat these codes like a password and store them in a safe place.
            </Text>

            <GridColumns>
              {(recoveryCodes ?? []).map(factor => (
                <Column span={6} key={factor}>
                  <Text variant="lg" textAlign="center">
                    {factor}
                  </Text>
                </Column>
              ))}
            </GridColumns>
          </Join>
        </ModalDialog>
      )}
    </>
  )
}
