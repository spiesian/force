import { ContextModule } from "@artsy/cohesion"
import {
  BellFillIcon,
  BellIcon,
  HeartFillIcon,
  HeartIcon,
} from "@artsy/palette"
import * as React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { useSaveArtwork } from "v2/Components/Artwork/SaveButton/useSaveArtwork"
import { ArtworkActionsSaveButton_artwork } from "v2/__generated__/ArtworkActionsSaveButton_artwork.graphql"
import { UtilButton } from "./ArtworkActions"
import { useIntl } from "react-intl"

interface ArtworkActionsSaveButtonProps {
  artwork: ArtworkActionsSaveButton_artwork
}
const ArtworkActionsSaveButton: React.FC<ArtworkActionsSaveButtonProps> = ({
  artwork,
}) => {
  const intl = useIntl()
  const { handleSave } = useSaveArtwork({
    isSaved: !!artwork.is_saved,
    artwork,
    contextModule: ContextModule.artworkImage,
  })

  const isOpenSale = artwork.sale?.isAuction && !artwork.sale?.isClosed

  const isSaved = !!artwork.is_saved

  // If an Auction, use Bell (for notifications); if a standard artwork use Heart
  if (isOpenSale) {
    const FilledIcon = () => <BellFillIcon fill="blue100" />

    return (
      <UtilButton
        name="bell"
        Icon={isSaved ? FilledIcon : BellIcon}
        label={intl.formatMessage({
          id: "artwork.artworkactionssavebutton.watchlot",
        })}
        onClick={handleSave}
      />
    )
  } else {
    const FilledIcon = () => <HeartFillIcon fill="blue100" />

    return (
      <UtilButton
        name="heart"
        Icon={isSaved ? FilledIcon : HeartIcon}
        label={intl.formatMessage({
          id: "artwork.artworkactionssavebutton.save",
        })}
        onClick={handleSave}
      />
    )
  }
}

export const ArtworkActionsSaveButtonFragmentContainer = createFragmentContainer(
  ArtworkActionsSaveButton,
  {
    artwork: graphql`
      fragment ArtworkActionsSaveButton_artwork on Artwork {
        internalID
        id
        slug
        title
        sale {
          isAuction
          isClosed
        }
        is_saved: isSaved
      }
    `,
  }
)
