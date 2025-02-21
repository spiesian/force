import { useMutation } from "v2/Utils/Hooks/useMutation"
import { graphql } from "react-relay"
import { useEditAddressMutation } from "v2/__generated__/useEditAddressMutation.graphql"

export const useEditAddress = () => {
  return useMutation<useEditAddressMutation>({
    mutation: graphql`
      mutation useEditAddressMutation($input: UpdateUserAddressInput!) {
        updateUserAddress(input: $input) {
          me {
            ...SettingsShippingAddresses_me
          }
          userAddressOrErrors {
            ... on UserAddress {
              internalID
              ...SettingsShippingAddress_address
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
