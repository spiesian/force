import * as React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { useTimer } from "v2/Utils/Hooks/useTimer"
import { ArtworkSidebarAuctionProgressBar_artwork } from "v2/__generated__/ArtworkSidebarAuctionProgressBar_artwork.graphql"
import { ProgressBar } from "@artsy/palette"

interface ArtworkSidebarAuctionProgressBarProps {
  artwork: ArtworkSidebarAuctionProgressBar_artwork
}

const ArtworkSidebarAuctionProgressBar: React.FC<ArtworkSidebarAuctionProgressBarProps> = ({
  artwork,
}) => {
  const { sale, saleArtwork } = artwork

  const extendedBiddingPeriodMinutes = sale?.extendedBiddingPeriodMinutes!
  const biddingEndAt = saleArtwork?.extendedBiddingEndAt ?? saleArtwork?.endAt

  const {
    time: { days, hours, minutes, seconds },
  } = useTimer(biddingEndAt!)

  const parsedDaysUntilEnd = parseInt(days, 10)
  const parsedHoursUntilEnd = parseInt(hours, 10)
  const parsedMinutesUntilEnd = parseInt(minutes, 10)
  const parsedSecondsUntilEnd = parseInt(seconds, 10)

  // This assumes that the period before a lot's end time which will extend bidding
  // and cause a progress bar to render is strictly less than 1 hour, which is
  // reasonable. In practice, we expect the value of `extendedBiddingPeriodMinutes`
  // to be 1 or 2.
  const isWithinExtendedBiddingPeriod =
    parsedDaysUntilEnd < 1 &&
    parsedHoursUntilEnd < 1 &&
    parsedMinutesUntilEnd < extendedBiddingPeriodMinutes

  const percentComplete =
    (parsedSecondsUntilEnd + parsedMinutesUntilEnd * 60) /
    (extendedBiddingPeriodMinutes * 60)

  return (
    <>
      {isWithinExtendedBiddingPeriod && (
        <ProgressBar
          highlight="red100"
          percentComplete={percentComplete * 100}
        />
      )}
    </>
  )
}

export const ArtworkSidebarAuctionProgressBarFragmentContainer = createFragmentContainer(
  ArtworkSidebarAuctionProgressBar,
  {
    artwork: graphql`
      fragment ArtworkSidebarAuctionProgressBar_artwork on Artwork {
        sale {
          extendedBiddingPeriodMinutes
        }
        saleArtwork {
          endAt
          extendedBiddingEndAt
        }
      }
    `,
  }
)
