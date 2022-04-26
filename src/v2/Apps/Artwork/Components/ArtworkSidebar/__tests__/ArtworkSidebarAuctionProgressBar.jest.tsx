import { ArtworkSidebarAuctionProgressBar_Test_QueryRawResponse } from "v2/__generated__/ArtworkSidebarAuctionProgressBar_Test_Query.graphql"
import { renderRelayTree } from "v2/DevTools"
import { graphql } from "react-relay"
import { ArtworkSidebarAuctionProgressBarFragmentContainer } from "../ArtworkSidebarAuctionProgressBar"
import { DateTime } from "luxon"

jest.unmock("react-relay")

describe("ArtworkSidebarAuctionProgressBar", () => {
  const getWrapper = async (
    response: ArtworkSidebarAuctionProgressBar_Test_QueryRawResponse["artwork"]
  ) => {
    return renderRelayTree({
      Component: ArtworkSidebarAuctionProgressBarFragmentContainer,
      query: graphql`
        query ArtworkSidebarAuctionProgressBar_Test_Query
          @raw_response_type
          @relay_test_operation {
          artwork(id: "auction_artwork_estimate_premium") {
            ...ArtworkSidebarAuctionProgressBar_artwork
          }
        }
      `,
      mockData: {
        artwork: response,
      } as ArtworkSidebarAuctionProgressBar_Test_QueryRawResponse,
    })
  }

  describe("ArtworkSidebarAuctionProgessBar", () => {
    it("displays a progress bar when within the extended bidding period", async () => {
      const data = {
        sale: {
          extendedBiddingPeriodMinutes: 1,
          id: "sale-id",
        },
        saleArtwork: {
          endAt: DateTime.local().minus({ seconds: 30 }).toString(),
          extendedBiddingEndAt: DateTime.local()
            .plus({ seconds: 30 })
            .toString(),
          id: "sale-artwork-id",
        },
        id: "artwork-id",
      }
      const wrapper = await getWrapper(data)

      expect(wrapper.find("div[role='progressbar']").length).toBe(1)
    })

    it("doesn't display a progess bar when within the extended bidding period", async () => {
      const data = {
        sale: {
          extendedBiddingPeriodMinutes: 1,
          id: "sale-id",
        },
        saleArtwork: {
          endAt: DateTime.local().plus({ seconds: 61 }).toString(),
          extendedBiddingEndAt: null,
          id: "sale-artwork-id",
        },
        id: "artwork-id",
      }
      const wrapper = await getWrapper(data)

      expect(wrapper.find("div[role='progressbar']").length).toBe(0)
    })
  })
})
