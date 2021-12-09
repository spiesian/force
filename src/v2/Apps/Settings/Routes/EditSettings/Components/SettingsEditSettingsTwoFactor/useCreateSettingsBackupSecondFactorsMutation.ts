import { graphql } from "relay-runtime"
import { useCreateSettingsBackupSecondFactorsMutation } from "v2/__generated__/useCreateSettingsBackupSecondFactorsMutation.graphql"
import { useMutation } from "v2/Utils/Hooks/useMutation"

export const useCreateSettingsBackupSecondFactors = () => {
  return useMutation<useCreateSettingsBackupSecondFactorsMutation>({
    mutation: graphql`
      mutation useCreateSettingsBackupSecondFactorsMutation(
        $input: CreateBackupSecondFactorsInput!
      ) {
        createBackupSecondFactors(input: $input) {
          secondFactorsOrErrors {
            __typename
            ... on BackupSecondFactors {
              secondFactors {
                code
              }
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
