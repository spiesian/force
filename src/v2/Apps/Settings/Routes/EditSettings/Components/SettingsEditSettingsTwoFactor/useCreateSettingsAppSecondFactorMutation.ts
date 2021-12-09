import { useMutation } from "v2/Utils/Hooks/useMutation"
import { graphql } from "relay-runtime"
import { useCreateSettingsAppSecondFactorMutation } from "v2/__generated__/useCreateSettingsAppSecondFactorMutation.graphql"

export const useCreateSettingsAppSecondFactor = () => {
  return useMutation<useCreateSettingsAppSecondFactorMutation>({
    mutation: graphql`
      mutation useCreateSettingsAppSecondFactorMutation(
        $input: CreateAppSecondFactorInput!
      ) {
        createAppSecondFactor(input: $input) {
          secondFactorOrErrors {
            __typename
            ... on AppSecondFactor {
              internalID
              otpSecret
              otpProvisioningURI
              name
            }
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
