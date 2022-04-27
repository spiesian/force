import { LotTimer } from "../LotTimer"
import { mount } from "enzyme"
import "jest-styled-components"
import { LotTimer_saleArtwork } from "v2/__generated__/LotTimer_saleArtwork.graphql"

describe("extendedBiddingInfoCopy", () => {
  describe("when extended bidding feature is on", () => {
    it("shows the extended bidding info label", () => {
      const saleArtwork: LotTimer_saleArtwork = {
        endAt: Date.now().toString(),
        formattedStartDateTime: "",
        extendedBiddingEndAt: "",
        sale: { startAt: "", extendedBiddingPeriodMinutes: 2 },
        " $refType": "LotTimer_saleArtwork",
      }
      const wrapper = mount(<LotTimer saleArtwork={saleArtwork} />)
      const text = wrapper.text()
      expect(text).toContain(
        "*Closure times may be extended to accomodate last minute bids"
      )
    })
    describe("a bid has extended the auction", () => {
      it("shows the extended next to the timer", () => {
        let startDate = new Date()
        const startAt = new Date(startDate.setMonth(startDate.getMonth() - 1))
        let endDate = new Date()
        const saleArtwork: LotTimer_saleArtwork = {
          endAt: new Date(
            endDate.setMinutes(endDate.getMinutes() + 1)
          ).toISOString(),
          formattedStartDateTime: "",
          extendedBiddingEndAt: new Date(
            endDate.setMinutes(endDate.getMinutes() + 1)
          ).toISOString(),
          sale: {
            startAt: startAt.toISOString(),
            extendedBiddingPeriodMinutes: 2,
          },
          " $refType": "LotTimer_saleArtwork",
        }
        const wrapper = mount(<LotTimer saleArtwork={saleArtwork} />)
        const text = wrapper.text()
        expect(text).toContain("Extended: 2m 0s")
      })
    })
    describe("the auction has not yet been extended", () => {
      it("does not show extended next to the timer", () => {
        let startDate = new Date()
        const startAt = new Date(startDate.setMonth(startDate.getMonth() - 1))
        let endDate = new Date()
        const saleArtwork: LotTimer_saleArtwork = {
          endAt: new Date(
            endDate.setMinutes(endDate.getMinutes() + 1)
          ).toISOString(),
          formattedStartDateTime: "",
          extendedBiddingEndAt: "",
          sale: {
            startAt: startAt.toISOString(),
            extendedBiddingPeriodMinutes: 2,
          },
          " $refType": "LotTimer_saleArtwork",
        }
        const wrapper = mount(<LotTimer saleArtwork={saleArtwork} />)
        const text = wrapper.text()
        expect(text).not.toContain("Extended:")
      })
    })
  })

  describe("when extended bidding feature is off", () => {
    it("shows the extended bidding info label", () => {
      const saleArtwork: LotTimer_saleArtwork = {
        endAt: Date.now().toString(),
        formattedStartDateTime: "",
        extendedBiddingEndAt: "",
        sale: { startAt: "", extendedBiddingPeriodMinutes: null },
        " $refType": "LotTimer_saleArtwork",
      }
      const wrapper = mount(<LotTimer saleArtwork={saleArtwork} />)
      const text = wrapper.text()
      expect(text).not.toContain(
        "*Closure times may be extended to accomodate last minute bids"
      )
    })
  })
})
