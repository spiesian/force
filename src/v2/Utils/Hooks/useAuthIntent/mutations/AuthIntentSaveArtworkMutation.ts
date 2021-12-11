import { commitMutation, Environment, graphql } from "relay-runtime"
import { AuthIntentMutation } from "./types"

export const saveArtworkMutation: AuthIntentMutation = (
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
        mutation AuthIntentSaveArtworkMutation($input: SaveArtworkInput!) {
          saveArtwork(input: $input) {
            artwork {
              id
              isSaved
            }
          }
        }
      `,
      optimisticResponse: {
        saveArtwork: {
          artwork: {
            id,
            isSaved: true,
          },
        },
      },
      variables: {
        input: {
          artworkID: id,
        },
      },
    })
  })
}
