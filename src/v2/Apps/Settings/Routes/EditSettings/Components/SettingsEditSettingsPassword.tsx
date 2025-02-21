import * as Yup from "yup"
import { FC } from "react"
import { createFragmentContainer, graphql } from "react-relay"
import {
  Text,
  Input,
  Button,
  Flex,
  PasswordInput,
  Join,
  Spacer,
  useToasts,
} from "@artsy/palette"
import { Form, Formik } from "formik"
import { useUpdateSettingsPassword } from "../useUpdateSettingsPassword"
import { logout } from "v2/Utils/auth"
import { SettingsEditSettingsPassword_me } from "v2/__generated__/SettingsEditSettingsPassword_me.graphql"
import { useMode } from "v2/Utils/Hooks/useMode"
import { password } from "v2/Components/Authentication/Validators"

interface SettingsEditSettingsPasswordProps {
  me: SettingsEditSettingsPassword_me
}

type Mode = "Pending" | "Active"

export const SettingsEditSettingsPassword: FC<SettingsEditSettingsPasswordProps> = ({
  me: { hasPassword },
}) => {
  const [mode, setMode] = useMode<Mode>("Pending")
  const { sendToast } = useToasts()
  const { submitUpdateSettingsPassword } = useUpdateSettingsPassword()

  const handleActivate = () => {
    setMode("Active")
  }

  const handleCancel = () => {
    setMode("Pending")
  }

  return (
    <>
      <Text variant="lg" mb={4}>
        Password
      </Text>

      {mode === "Pending" ? (
        <>
          {hasPassword && (
            <Input
              title="Current Password"
              type="password"
              value="examplepassword"
              required
              disabled
            />
          )}

          <Button mt={hasPassword ? 4 : 0} onClick={handleActivate}>
            {hasPassword ? "Create New Password" : "Set Password"}
          </Button>
        </>
      ) : (
        <Formik
          validateOnMount
          initialValues={{
            currentPassword: "",
            newPassword: "",
            passwordConfirmation: "",
          }}
          validationSchema={Yup.object().shape({
            currentPassword: Yup.string()
              .required("Current password required")
              .when("email", {
                is: () => hasPassword,
                otherwise: field => field.notRequired(),
              }),
            newPassword: password,
            passwordConfirmation: Yup.string()
              .required("Password confirmation required")
              .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
          })}
          onSubmit={async ({
            currentPassword,
            newPassword,
            passwordConfirmation,
          }) => {
            try {
              await submitUpdateSettingsPassword({
                currentPassword,
                newPassword,
                passwordConfirmation,
              })

              sendToast({
                variant: "success",
                message: hasPassword
                  ? "Password updated successfully"
                  : "Password set successfully",
              })

              await logout()

              window.location.href = "/login"
            } catch (err) {
              console.error(err)

              const error = Array.isArray(err) ? err[0] : err

              sendToast({
                variant: "error",
                message: "There was a problem",
                description: error.message,
              })
            }
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            isSubmitting,
            values,
            isValid,
            touched,
          }) => {
            return (
              <Form>
                <Join separator={<Spacer mt={2} />}>
                  {hasPassword && (
                    <PasswordInput
                      name="currentPassword"
                      title="Current Password"
                      error={touched.currentPassword && errors.currentPassword}
                      placeholder="Enter your current password"
                      value={values.currentPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                      autoComplete="current-password"
                    />
                  )}

                  <PasswordInput
                    name="newPassword"
                    title="New Password"
                    error={touched.newPassword && errors.newPassword}
                    placeholder="Enter your new password"
                    value={values.newPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    autoComplete="new-password"
                  />

                  <PasswordInput
                    name="passwordConfirmation"
                    title="Repeat New Password"
                    error={
                      touched.passwordConfirmation &&
                      errors.passwordConfirmation
                    }
                    placeholder="Confirm your new password"
                    value={values.passwordConfirmation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    autoComplete="new-password"
                  />

                  <Flex mt={4}>
                    <Button
                      data-test="password-submit"
                      type="submit"
                      loading={isSubmitting}
                      disabled={!isValid}
                    >
                      Save Changes
                    </Button>

                    <Button
                      ml={1}
                      type="button"
                      variant="secondaryOutline"
                      onClick={handleCancel}
                    >
                      Cancel
                    </Button>
                  </Flex>
                </Join>
              </Form>
            )
          }}
        </Formik>
      )}
    </>
  )
}

export const SettingsEditSettingsPasswordFragmentContainer = createFragmentContainer(
  SettingsEditSettingsPassword,
  {
    me: graphql`
      fragment SettingsEditSettingsPassword_me on Me {
        hasPassword
      }
    `,
  }
)
