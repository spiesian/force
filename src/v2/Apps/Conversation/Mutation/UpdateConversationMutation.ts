import { Conversation_conversation } from "v2/__generated__/Conversation_conversation.graphql"
import { UpdateConversationMutation } from "v2/__generated__/UpdateConversationMutation.graphql"
import { Environment, commitMutation, graphql } from "relay-runtime"

export const UpdateConversation = (
  environment: Environment,
  conversation: Conversation_conversation
) => {
  return commitMutation<UpdateConversationMutation>(environment, {
    variables: {
      input: {
        conversationId: conversation?.internalID ?? "",
        fromLastViewedMessageId: conversation?.lastMessageID ?? "",
      },
    },
    // PLEASE_FIXME: REMOVE_THIS_COMMENT_RELAY_UPGRADE
    mutation: graphql`
      mutation UpdateConversationMutation(
        $input: UpdateConversationMutationInput!
      ) {
        updateConversation(input: $input) {
          conversation {
            id
            unread
          }
        }
      }
    `,
    optimisticResponse: {
      updateConversation: {
        conversation: {
          id: conversation?.internalID ?? "",
          unread: false,
        },
      },
    },
    updater: (store, data) => {
      const conversationProxy = store.get(conversation.id)
      conversationProxy?.setValue(false, "unread")
    },
  })
}
