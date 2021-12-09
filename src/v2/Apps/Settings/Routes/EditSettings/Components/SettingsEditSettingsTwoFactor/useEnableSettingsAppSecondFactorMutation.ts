import { useMutation } from "v2/Utils/Hooks/useMutation"
import { graphql } from "relay-runtime"
import { useEnableSettingsAppSecondFactorMutation } from "v2/__generated__/useEnableSettingsAppSecondFactorMutation.graphql"

export const useEnableSettingsAppSecondFactor = () => {
  return useMutation<useEnableSettingsAppSecondFactorMutation>({
    mutation: graphql`
      mutation useEnableSettingsAppSecondFactorMutation(
        $input: EnableSecondFactorInput!
      ) {
        enableSecondFactor(input: $input) {
          recoveryCodes
          secondFactorOrErrors {
            __typename
            ... on Errors {
              errors {
                message
              }
            }
          }
        }
      }
    `,
  })
}
