import { graphql } from "react-relay"

// PLEASE_FIXME: REMOVE_THIS_COMMENT_RELAY_UPGRADE
export const FairOrganizerDedicatedArticlesQuery = graphql`
  query FairOrganizerDedicatedArticlesQuery(
    $id: String!
    $first: Int
    $page: Int
  ) {
    fairOrganizer(id: $id) {
      ...FairOrganizerDedicatedArticles_fairOrganizer
        @arguments(first: $first, page: $page)
    }
  }
`
