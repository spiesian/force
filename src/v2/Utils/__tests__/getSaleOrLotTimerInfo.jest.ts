import { getSaleOrLotTimerInfo } from "../getSaleOrLotTimerInfo"

describe("getSaleOrLotTimerInfo", () => {
  describe("when the timer info is on the sale", () => {
    describe("when the sale is open", () => {
      describe("when the close date/time is more than 24 hrs before closing", () => {
        const time = { days: "1", hours: "4", minutes: "00", seconds: "00" }
        const hasStarted = true
        const hasEnded = false
        it("formats the timer correctly", () => {
          const saleTimerInfo = getSaleOrLotTimerInfo(
            time,
            hasStarted,
            hasEnded,
            true
          )
          expect(saleTimerInfo.copy).toEqual("2 Days Until Lots Start Closing")
          expect(saleTimerInfo.color).toEqual("blue100")
        })
      })

      describe("when the close date/time is less than 24 hours before closing", () => {
        const time = { days: "0", hours: "23", minutes: "33", seconds: "00" }
        const hasStarted = true
        const hasEnded = false
        it("formats the timer correctly", () => {
          const saleTimerInfo = getSaleOrLotTimerInfo(
            time,
            hasStarted,
            hasEnded,
            true
          )
          expect(saleTimerInfo.copy).toEqual("23h 33m Until Lots Start Closing")
          expect(saleTimerInfo.color).toEqual("red100")
        })
      })

      describe("when the close date/time is less than 1 hours before closing", () => {
        const time = { days: "0", hours: "0", minutes: "58", seconds: "23" }
        const hasStarted = true
        const hasEnded = false
        it("formats the timer correctly", () => {
          const saleTimerInfo = getSaleOrLotTimerInfo(
            time,
            hasStarted,
            hasEnded,
            true
          )
          expect(saleTimerInfo.copy).toEqual("58m 23s Until Lots Start Closing")
          expect(saleTimerInfo.color).toEqual("red100")
        })
      })

      describe("when the sale has begun closing", () => {
        const time = { days: "0", hours: "0", minutes: "0", seconds: "0" }
        const hasStarted = true
        const hasEnded = true
        it("formats the timer correctly", () => {
          const saleTimerInfo = getSaleOrLotTimerInfo(
            time,
            hasStarted,
            hasEnded,
            true
          )
          expect(saleTimerInfo.copy).toEqual("Lots are closing")
          expect(saleTimerInfo.color).toEqual("red100")
        })
      })
    })

    describe("when the sale is not yet open", () => {
      describe("when the sale is more than 1 day away", () => {
        const time = { days: "3", hours: "0", minutes: "0", seconds: "0" }
        const hasStarted = false
        const hasEnded = false
        it("formats the timer correctly", () => {
          const saleTimerInfo = getSaleOrLotTimerInfo(
            time,
            hasStarted,
            hasEnded,
            true
          )
          expect(saleTimerInfo.copy).toEqual("3 Days Until Bidding Starts")
          expect(saleTimerInfo.color).toEqual("blue100")
        })
      })

      describe("when the sale is less than 1 day away", () => {
        const time = { days: "0", hours: "20", minutes: "0", seconds: "0" }
        const hasStarted = false
        const hasEnded = false
        it("formats the timer correctly", () => {
          const saleTimerInfo = getSaleOrLotTimerInfo(
            time,
            hasStarted,
            hasEnded,
            true
          )
          expect(saleTimerInfo.copy).toEqual("Bidding Starts Today")
          expect(saleTimerInfo.color).toEqual("blue100")
        })
      })
    })

    describe("when the sale has popcorn bidding", () => {
      const time = { days: "3", hours: "0", minutes: "2", seconds: "0" }
      const hasStarted = true
      const hasEnded = false
      it("formats the timer correctly", () => {
        const saleTimerInfo = getSaleOrLotTimerInfo(
          time,
          hasStarted,
          hasEnded,
          true,
          "2"
        )
        expect(saleTimerInfo.copy).toEqual("Extended: 2m 0s")
        expect(saleTimerInfo.color).toEqual("red100")
      })
    })
  })

  describe("when the timer is on the lot", () => {
    describe("getTimerCopy", () => {
      describe("when the sale is open", () => {
        const hasStarted = true
        describe("when the close date/time is more than 24 hrs before closing", () => {
          const time = { days: "01", hours: "23", minutes: "33", seconds: "00" }
          it("formats the timer to show 'xd xh' in blue", () => {
            const lotTimerInfo = getSaleOrLotTimerInfo(time, hasStarted)
            expect(lotTimerInfo.copy).toEqual("1d 23h")
            expect(lotTimerInfo.color).toEqual("blue100")
          })
        })

        describe("when the close date/time is between 1 and 24 hours before closing", () => {
          const time = { days: "00", hours: "23", minutes: "33", seconds: "01" }

          it("formats the timer to show 'xh xm' in blue", () => {
            const lotTimerInfo = getSaleOrLotTimerInfo(time, hasStarted)
            expect(lotTimerInfo.copy).toEqual("23h 33m")
            expect(lotTimerInfo.color).toEqual("blue100")
          })
        })

        describe("when the close date/time is less than 1 hour but greater than 2 min until close", () => {
          const time = { days: "00", hours: "00", minutes: "33", seconds: "01" }

          it("formats the timer to show 'xm xs' in red", () => {
            const lotTimerInfo = getSaleOrLotTimerInfo(time, hasStarted)
            expect(lotTimerInfo.copy).toEqual("33m 1s")
            expect(lotTimerInfo.color).toEqual("red100")
          })
        })

        describe("when the close date/time is less than 2 min until close", () => {
          const time = { days: "00", hours: "00", minutes: "01", seconds: "59" }

          it("formats the timer to show 'xm xs' in red", () => {
            const lotTimerInfo = getSaleOrLotTimerInfo(time, hasStarted)
            expect(lotTimerInfo.copy).toEqual("1m 59s")
            expect(lotTimerInfo.color).toEqual("red100")
          })
        })

        describe("when the close date/time is 2-3 min until close", () => {
          const time = { days: "00", hours: "00", minutes: "02", seconds: "59" }

          it("formats the timer to show 'xm xs' in red", () => {
            const lotTimerInfo = getSaleOrLotTimerInfo(time, hasStarted)
            expect(lotTimerInfo.copy).toEqual("2m 59s")
            expect(lotTimerInfo.color).toEqual("red100")
          })
        })
      })

      describe("when the sale is not yet open", () => {
        const hasStarted = false
        describe("when the open time is less than one day way", () => {
          const time = { days: "00", hours: "23", minutes: "01", seconds: "59" }
          it("shows '1 Day Until Bidding Starts'", () => {
            const lotTimerInfo = getSaleOrLotTimerInfo(time, hasStarted)
            expect(lotTimerInfo.copy).toEqual("Bidding Starts Today")
            expect(lotTimerInfo.color).toEqual("blue100")
          })
        })

        describe("when the open time is between 1 and 2 days away", () => {
          const time = { days: "01", hours: "23", minutes: "01", seconds: "59" }
          it("shows '2 Days Until Bidding Starts'", () => {
            const lotTimerInfo = getSaleOrLotTimerInfo(time, hasStarted)
            expect(lotTimerInfo.copy).toEqual("1 Day Until Bidding Starts")
            expect(lotTimerInfo.color).toEqual("blue100")
          })
        })

        describe("when the open time is more than one day away", () => {
          const time = { days: "02", hours: "23", minutes: "01", seconds: "59" }
          it("shows '2 Days Until Bidding Starts'", () => {
            const lotTimerInfo = getSaleOrLotTimerInfo(time, hasStarted)
            expect(lotTimerInfo.copy).toEqual("2 Days Until Bidding Starts")
            expect(lotTimerInfo.color).toEqual("blue100")
          })
        })
      })
    })
  })
})
