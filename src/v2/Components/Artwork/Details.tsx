import {
  Link,
  Text,
  LinkProps,
  useThemeConfig,
  TextVariant,
  Flex,
  Spacer,
  Box,
} from "@artsy/palette"
import { Details_artwork } from "v2/__generated__/Details_artwork.graphql"
import * as React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { useArtworkGridContext } from "../ArtworkGrid/ArtworkGridContext"
import { getTimerCopy } from "../LotTimer"
import { useTimer } from "v2/Utils/Hooks/useTimer"
import { HoverDetailsFragmentContainer } from "./HoverDetails"

import { ContextModule } from "@artsy/cohesion"
import { NewSaveButtonFragmentContainer } from "./SaveButton"

interface DetailsProps {
  artwork: Details_artwork
  includeLinks: boolean
  hideSaleInfo?: boolean
  hideArtistName?: boolean
  hidePartnerName?: boolean
  isHovered?: boolean
  shouldShowHoverSaveButton?: boolean
}

const ConditionalLink: React.FC<
  Pick<DetailsProps, "includeLinks"> &
    LinkProps &
    React.AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ includeLinks, children, ...rest }) => {
  return includeLinks ? <Link {...rest}>{children}</Link> : <>{children}</>
}

const ArtistLine: React.FC<DetailsProps> = ({
  artwork: { cultural_maker, artists },
  includeLinks,
}) => {
  const tokens = useThemeConfig({
    v2: {
      variant: "mediumText" as TextVariant,
    },
    v3: {
      variant: "md" as TextVariant,
    },
  })

  if (cultural_maker) {
    return (
      <Text variant={tokens.variant} overflowEllipsis>
        {cultural_maker}
      </Text>
    )
  }

  if (!artists?.length) {
    return null
  }

  return (
    <Text variant={tokens.variant} overflowEllipsis>
      {artists.map((artist, i) => {
        if (!artist || !artist.href || !artist.name) return null

        return (
          <ConditionalLink
            includeLinks={includeLinks}
            href={artist.href}
            key={i}
          >
            {artist.name}
            {i !== artists.length - 1 && ", "}
          </ConditionalLink>
        )
      })}
    </Text>
  )
}

const TitleLine: React.FC<DetailsProps> = ({
  includeLinks,
  artwork: { title, date, href },
}) => {
  const tokens = useThemeConfig({
    v2: {
      variant: "text" as TextVariant,
    },
    v3: {
      variant: "md" as TextVariant,
    },
  })

  return (
    <ConditionalLink includeLinks={includeLinks} href={href!}>
      <Text variant={tokens.variant} color="black60" overflowEllipsis>
        <i>{title}</i>
        {date && `, ${date}`}
      </Text>
    </ConditionalLink>
  )
}

const PartnerLine: React.FC<DetailsProps> = ({
  includeLinks,
  artwork: { collecting_institution, partner },
}) => {
  const tokens = useThemeConfig({
    v2: {
      variant: "text" as TextVariant,
    },
    v3: {
      variant: "xs" as TextVariant,
    },
  })

  if (collecting_institution) {
    return (
      <Text variant={tokens.variant} color="black60" overflowEllipsis>
        {collecting_institution}
      </Text>
    )
  }

  if (partner) {
    return (
      <ConditionalLink includeLinks={includeLinks} href={partner?.href!}>
        <Text variant={tokens.variant} color="black60" overflowEllipsis>
          {partner.name}
        </Text>
      </ConditionalLink>
    )
  }

  return null
}

const SaleInfoLine: React.FC<DetailsProps> = props => {
  const tokens = useThemeConfig({
    v2: {
      variant: "text" as TextVariant,
      color: "black60",
      fontWeight: "normal",
    },
    v3: {
      variant: "xs" as TextVariant,
      color: "black100",
      fontWeight: "bold",
    },
  })

  return (
    <Text
      variant={tokens.variant}
      color={tokens.color}
      fontWeight={tokens.fontWeight}
      overflowEllipsis
    >
      <SaleMessage {...props} /> <BidInfo {...props} />
    </Text>
  )
}

const SaleMessage: React.FC<DetailsProps> = ({
  artwork: { sale, sale_message, sale_artwork },
}) => {
  if (sale?.is_auction && sale?.is_closed) {
    return <>Bidding closed</>
  }

  if (sale?.is_auction) {
    const highestBid_display = sale_artwork?.highest_bid?.display
    const openingBid_display = sale_artwork?.opening_bid?.display

    return <>{highestBid_display || openingBid_display || ""}</>
  }

  if (sale_message === "Contact For Price") {
    return <>Price on request</>
  }

  return <>{sale_message}</>
}

const BidInfo: React.FC<DetailsProps> = ({
  artwork: { sale, sale_artwork },
}) => {
  const inRunningAuction = sale?.is_auction && !sale?.is_closed

  if (!inRunningAuction) {
    return null
  }

  const bidderPositionCounts = sale_artwork?.counts?.bidder_positions ?? 0

  if (bidderPositionCounts === 0) {
    return null
  }

  return (
    <>
      ({bidderPositionCounts} bid{bidderPositionCounts === 1 ? "" : "s"})
    </>
  )
}

export const Details: React.FC<DetailsProps> = ({
  hideArtistName,
  hidePartnerName,
  hideSaleInfo,
  isHovered,
  shouldShowHoverSaveButton,
  ...rest
}) => {
  const { isAuctionArtwork } = useArtworkGridContext()

  return (
    <Box>
      {isAuctionArtwork && (
        <Flex flexDirection="row">
          <Text variant="xs">Lot {rest.artwork?.sale_artwork?.lotLabel}</Text>
          {rest?.artwork?.sale?.cascadingEndTimeIntervalMinutes &&
            rest?.artwork?.sale_artwork && (
              <>
                <Spacer mx={0.5} />
                <LotCloseInfo
                  saleArtwork={rest.artwork.sale_artwork}
                  sale={rest.artwork.sale}
                />
              </>
            )}
        </Flex>
      )}
      <Flex flexDirection="row" justifyContent="space-between">
        {!hideArtistName && <ArtistLine {...rest} />}
        {shouldShowHoverSaveButton && (
          <NewSaveButtonFragmentContainer
            contextModule={ContextModule.artworkGrid}
            artwork={rest.artwork}
          />
        )}
      </Flex>
      <Box position="relative">
        <TitleLine {...rest} />
        {!hidePartnerName && <PartnerLine {...rest} />}
        {isHovered && <HoverDetailsFragmentContainer artwork={rest.artwork} />}
      </Box>
      {!hideSaleInfo && <SaleInfoLine {...rest} />}
    </Box>
  )
}

interface LotCloseInfoProps {
  saleArtwork: NonNullable<Details_artwork["sale_artwork"]>
  sale: NonNullable<Details_artwork["sale"]>
}

export const LotCloseInfo: React.FC<LotCloseInfoProps> = ({
  saleArtwork,
  sale,
}) => {
  const { hasEnded: lotHasClosed, time } = useTimer(
    saleArtwork.endAt!,
    sale.startAt!
  )

  const { hasEnded: lotsAreClosing, hasStarted: saleHasStarted } = useTimer(
    sale.endAt!,
    sale.startAt!
  )

  if (!saleHasStarted) {
    return null
  }

  const timerCopy = getTimerCopy(time, saleHasStarted)

  let lotCloseCopy
  let labelColor = "black60"

  // Lot has already closed
  if (lotHasClosed) {
    lotCloseCopy = "Closed"
  } else if (saleHasStarted) {
    // Sale has started and lots are <24 hours from closing or are actively closing
    if (parseInt(time.days) < 1 || lotsAreClosing) {
      lotCloseCopy = `Closes, ${timerCopy.copy}`
      if (timerCopy.color === "red100") {
        labelColor = "red100"
      } else {
        labelColor = "black100"
      }
    }
    // Sale has started but lots have not started closing
    else {
      lotCloseCopy = saleArtwork.formattedEndDateTime
    }
  }

  return (
    <Text variant="xs" color={labelColor}>
      {lotCloseCopy}
    </Text>
  )
}

export const DetailsFragmentContainer = createFragmentContainer(Details, {
  artwork: graphql`
    fragment Details_artwork on Artwork {
      href
      title
      date
      sale_message: saleMessage
      cultural_maker: culturalMaker
      artists(shallow: true) {
        id
        href
        name
      }
      collecting_institution: collectingInstitution
      partner(shallow: true) {
        name
        href
      }
      sale {
        endAt
        cascadingEndTimeIntervalMinutes
        startAt
        is_auction: isAuction
        is_closed: isClosed
      }
      sale_artwork: saleArtwork {
        lotLabel
        endAt
        formattedEndDateTime
        counts {
          bidder_positions: bidderPositions
        }
        highest_bid: highestBid {
          display
        }
        opening_bid: openingBid {
          display
        }
      }
      ...NewSaveButton_artwork
      ...HoverDetails_artwork
    }
  `,
})
