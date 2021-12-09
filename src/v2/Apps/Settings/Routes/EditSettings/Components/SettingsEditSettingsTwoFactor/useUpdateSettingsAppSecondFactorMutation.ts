import { useMutation } from "v2/Utils/Hooks/useMutation"
import { graphql } from "relay-runtime"
import { useUpdateSettingsAppSecondFactorMutation } from "v2/__generated__/useUpdateSettingsAppSecondFactorMutation.graphql"

export const useUpdateSettingsAppSecondFactor = () => {
  return useMutation<useUpdateSettingsAppSecondFactorMutation>({
    mutation: graphql`
      mutation useUpdateSettingsAppSecondFactorMutation(
        $input: UpdateAppSecondFactorInput!
      ) {
        updateAppSecondFactor(input: $input) {
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
