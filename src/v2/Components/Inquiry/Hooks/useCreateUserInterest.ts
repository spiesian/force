import { commitMutation, graphql } from "relay-runtime"
import {
  useCreateUserInterestMutation,
  CreateUserInterestMutationInput,
} from "v2/__generated__/useCreateUserInterestMutation.graphql"
import { useInquiryContext } from "./useInquiryContext"

export const useCreateUserInterest = () => {
  const { relayEnvironment } = useInquiryContext()

  const submitCreateUserInterest = (input: CreateUserInterestMutationInput) => {
    return new Promise((resolve, reject) => {
      commitMutation<useCreateUserInterestMutation>(relayEnvironment.current!, {
        onError: reject,
        onCompleted: (res, errors) => {
          if (errors !== null) {
            reject(errors)
            return
          }

          resolve(res)
        },
        // PLEASE_FIXME: REMOVE_THIS_COMMENT_RELAY_UPGRADE
        mutation: graphql`
          mutation useCreateUserInterestMutation(
            $input: CreateUserInterestMutationInput!
          ) {
            createUserInterest(input: $input) {
              clientMutationId
            }
          }
        `,
        variables: { input },
      })
    })
  }

  return { submitCreateUserInterest }
}
