import { graphql } from "react-relay"

// PLEASE_FIXME: REMOVE_THIS_COMMENT_RELAY_UPGRADE
export const ArtworkQueryFilter = graphql`
  query ArtworkQueryFilterQuery($input: FilterArtworksInput)
    @raw_response_type {
    viewer {
      ...ArtworkFilter_viewer @arguments(input: $input)
    }
  }
`
