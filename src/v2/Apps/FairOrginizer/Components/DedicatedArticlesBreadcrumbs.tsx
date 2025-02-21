import * as React from "react"
import { createFragmentContainer, graphql } from "react-relay"
import { DedicatedArticlesBreadcrumbs_fairOrganizer } from "v2/__generated__/DedicatedArticlesBreadcrumbs_fairOrganizer.graphql"
import { TopContextBar } from "v2/Components/TopContextBar"

interface DedicatedArticlesBreadcrumbsProps {
  fairOrganizer: DedicatedArticlesBreadcrumbs_fairOrganizer
}

export const DedicatedArticlesBreadcrumbs: React.FC<DedicatedArticlesBreadcrumbsProps> = ({
  fairOrganizer,
}) => {
  const { name, slug, profile } = fairOrganizer

  return (
    <TopContextBar
      displayBackArrow
      href={`/fair-organizer/${slug}`}
      src={profile?.image?.url}
    >
      Explore {name} on Artsy
    </TopContextBar>
  )
}

export const DedicatedArticlesBreadcrumbsFragmentContainer = createFragmentContainer(
  DedicatedArticlesBreadcrumbs,
  {
    fairOrganizer: graphql`
      fragment DedicatedArticlesBreadcrumbs_fairOrganizer on FairOrganizer {
        slug
        name
        profile {
          image {
            url
          }
        }
      }
    `,
  }
)
