import { commitMutation, graphql } from "relay-runtime"
import {
  useUpdateCollectorProfileMutation,
  UpdateCollectorProfileInput,
} from "v2/__generated__/useUpdateCollectorProfileMutation.graphql"
import { useInquiryContext } from "./useInquiryContext"

export const useUpdateCollectorProfile = () => {
  const { relayEnvironment } = useInquiryContext()

  const submitUpdateCollectorProfile = (
    input: UpdateCollectorProfileInput = {}
  ) => {
    return new Promise((resolve, reject) => {
      commitMutation<useUpdateCollectorProfileMutation>(
        relayEnvironment.current!,
        {
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
            mutation useUpdateCollectorProfileMutation(
              $input: UpdateCollectorProfileInput!
            ) {
              updateCollectorProfile(input: $input) {
                clientMutationId
              }
            }
          `,
          variables: { input },
        }
      )
    })
  }

  return { submitUpdateCollectorProfile }
}
