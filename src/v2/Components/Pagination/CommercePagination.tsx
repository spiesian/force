import { Pagination } from "./index"
import { createFragmentContainer, graphql } from "react-relay"

export const CommercePaginationFragmentContainer = createFragmentContainer(
  Pagination,
  {
    // PLEASE_FIXME: REMOVE_THIS_COMMENT_RELAY_UPGRADE
    pageCursors: graphql`
      fragment CommercePagination_pageCursors on CommercePageCursors {
        around {
          cursor
          page
          isCurrent
        }
        first {
          cursor
          page
          isCurrent
        }
        last {
          cursor
          page
          isCurrent
        }
        previous {
          cursor
          page
        }
      }
    `,
  }
)
