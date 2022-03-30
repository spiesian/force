import { Box } from "@artsy/palette"
import { ArtistInfoQueryRenderer } from "v2/Apps/Artwork/Components/ArtistInfo"
import "v2/System/i18n/i18n"

export const ReactionArtworkArtistInfo = props => {
  return (
    <Box mt={2} mb={6}>
      <ArtistInfoQueryRenderer slug={props.artistID} />
    </Box>
  )
}
