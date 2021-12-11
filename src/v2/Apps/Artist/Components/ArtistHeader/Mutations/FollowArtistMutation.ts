import { commitMutation, Environment, graphql } from "relay-runtime"
import { FollowArtistMutation } from "v2/__generated__/FollowArtistMutation.graphql"

export type FollowArtistMutationProps = (
  relayEnvironment: Environment,
  id: string,
  isFollowed?: boolean
) => Promise<unknown>

export const followArtistMutation: FollowArtistMutationProps = (
  relayEnvironment: Environment,
  id: string,
  isFollowed: boolean = false
) => {
  return new Promise((resolve, reject) => {
    commitMutation<FollowArtistMutation>(relayEnvironment, {
      onCompleted: (res, errors) => {
        if (errors !== null) {
          reject(errors)
          return
        }

        resolve(res)
      },
      // PLEASE_FIXME: REMOVE_THIS_COMMENT_RELAY_UPGRADE
      // PLEASE_FIXME: REMOVE_THIS_COMMENT_RELAY_UPGRADE
      mutation: graphql`
        mutation FollowArtistMutation($input: FollowArtistInput!) {
          followArtist(input: $input) {
            artist {
              id
              isFollowed
            }
          }
        }
      `,
      // FIXME: Why is optimistic response not working in UI?
      optimisticResponse: {
        followArtist: {
          artist: {
            id,
            isFollowed: !isFollowed,
          },
        },
      },
      variables: {
        input: {
          artistID: id,
          unfollow: isFollowed,
        },
      },
    })
  })
}
