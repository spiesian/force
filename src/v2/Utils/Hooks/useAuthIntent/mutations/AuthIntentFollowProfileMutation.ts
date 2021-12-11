import { commitMutation, Environment, graphql } from "relay-runtime"
import { AuthIntentMutation } from "./types"

export const followProfileMutation: AuthIntentMutation = (
  relayEnvironment: Environment,
  id: string
) => {
  return new Promise((resolve, reject) => {
    commitMutation(relayEnvironment, {
      onCompleted: (res, errors) => {
        if (errors !== null) {
          reject(errors)
          return
        }

        resolve(res)
      },
      // PLEASE_FIXME: REMOVE_THIS_COMMENT_RELAY_UPGRADE
      mutation: graphql`
        mutation AuthIntentFollowProfileMutation($input: FollowProfileInput!) {
          followProfile(input: $input) {
            profile {
              id
              isFollowed
            }
          }
        }
      `,
      optimisticResponse: {
        followProfile: {
          profile: {
            id,
            isFollowed: true,
          },
        },
      },
      variables: {
        input: {
          profileID: id,
        },
      },
    })
  })
}
