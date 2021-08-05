import React from "react"
import { ConversationPaginationContainer } from "../Conversation"
import { graphql } from "react-relay"
import { useTracking } from "react-tracking"
import { useSystemContext as baseUseSystemContext } from "v2/System/useSystemContext"
import { setupTestWrapper } from "v2/DevTools/setupTestWrapper"

jest.unmock("react-relay")
jest.mock("react-tracking")
jest.mock("v2/System/useSystemContext")

describe("Conversation", () => {
  const { getWrapper } = setupTestWrapper({
    Component: (props: any) => {
      return (
        <ConversationPaginationContainer
          conversation={props.me.conversation}
          setShowDetails={jest.fn()}
          showDetails={false}
          refetch={jest.fn()}
        />
      )
    },
    query: graphql`
      query Conversation_Test_Query {
        me {
          conversation(id: "1234") {
            ...Conversation_conversation
          }
        }
      }
    `,
  })

  const mockuseTracking = useTracking as jest.Mock
  const trackingSpy = jest.fn()
  let useSystemContext = baseUseSystemContext as jest.Mock

  beforeEach(() => {
    mockuseTracking.mockImplementation(() => ({
      trackEvent: trackingSpy,
    }))
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  describe("when user has Inquiry Checkout feature and the artwork is offerable", () => {
    let conversation
    beforeEach(() => {
      useSystemContext.mockImplementation(() => {
        return {
          user: { lab_features: ["Web Inquiry Checkout"] },
        }
      })
      conversation = getWrapper()
    })

    it("shows the buyer guarantee message", () => {
      const buyerGuaranteeMessage = conversation.find("BuyerGuaranteeMessage")

      expect(buyerGuaranteeMessage).toHaveLength(1)
    })

    it("renders the OrderModal", () => {
      const orderModal = conversation.find("OrderModal")

      expect(orderModal).toHaveLength(1)
    })

    it("renders the confirm artwork modal query renderer", () => {
      const queryRenderer = conversation.find(
        "ConfirmArtworkModalQueryRenderer"
      )

      expect(queryRenderer).toHaveLength(1)
    })
  })

  describe("when the artwork is not offerable", () => {
    beforeEach(() => {
      useSystemContext.mockImplementation(() => {
        return {
          user: { lab_features: ["Web Inquiry Checkout"] },
        }
      })
    })

    it("doesn't show the buyer guarantee message", () => {
      const conversation = getWrapper({
        Conversation: () => ({
          internalID: "1234hello",
          items: [
            {
              liveArtwork: {
                isOfferableFromInquiry: false,
              },
            },
          ],
        }),
      })
      const buyerGuaranteeMessage = conversation.find("BuyerGuaranteeMessage")

      expect(buyerGuaranteeMessage).toHaveLength(0)
    })
  })

  describe("when user doesn't have Inquiry Checkout feature", () => {
    beforeEach(() => {
      useSystemContext.mockImplementation(() => {
        return {
          user: { lab_features: [] },
        }
      })
    })

    it("doesn't show the buyer guarantee message", () => {
      const conversation = getWrapper()
      const buyerGuaranteeMessage = conversation.find("BuyerGuaranteeMessage")

      expect(buyerGuaranteeMessage).toHaveLength(0)
    })
  })
})
