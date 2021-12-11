import { createFragmentContainer, graphql } from "react-relay"

const Auction2ArtworksRoute = () => {
  return <>artworks</>
}

export const Auction2ArtworksRouteFragmentContainer = createFragmentContainer(
  Auction2ArtworksRoute,
  {
    // PLEASE_FIXME: REMOVE_THIS_COMMENT_RELAY_UPGRADE
    sale: graphql`
      fragment Auction2ArtworksRoute_sale on Sale {
        slug
      }
    `,
  }
)
