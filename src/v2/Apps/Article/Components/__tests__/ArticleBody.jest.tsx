import { screen } from "@testing-library/react"
import { graphql } from "react-relay"
import { setupTestWrapperTL } from "v2/DevTools/setupTestWrapper"
import { ArticleBodyFragmentContainer } from "../ArticleBody"

jest.unmock("react-relay")

const { renderWithRelay } = setupTestWrapperTL({
  Component: ArticleBodyFragmentContainer,
  query: graphql`
    query ArticleBody_test_Query @relay_test_operation {
      article(id: "example") {
        ...ArticleBody_article
      }
    }
  `,
})

describe("ArticleBody", () => {
  it("renders the article", () => {
    renderWithRelay({
      Article: () => ({
        publishedAt: "March 20th, 2020",
        newsSource: null,
      }),
      Author: () => ({
        name: "Example Author",
      }),
    })

    expect(screen.getByText("March 20th, 2020")).toBeInTheDocument()
    expect(screen.getByText("Example Author")).toBeInTheDocument()
  })

  it("renders a video embed", () => {
    renderWithRelay({
      Article: () => ({
        sections: [
          {
            __typename: "ArticleSectionVideo",
            embed: '<iframe src="https://example.com/embed" />',
            image: {
              cropped: {
                src: "https://example.com/image.jpg",
                srcSet: "https://example.com/image.jpg 1x",
              },
            },
          },
        ],
      }),
    })

    expect(screen.getByTestId("ArticleSectionVideo")).toBeInTheDocument()
  })

  it("renders a social embed", () => {
    renderWithRelay({
      Article: () => ({
        sections: [
          {
            __typename: "ArticleSectionSocialEmbed",
            embed: '<iframe src="https://example.com/embed" />',
          },
        ],
      }),
    })

    expect(screen.getByTestId("ArticleSectionSocialEmbed")).toBeInTheDocument()
  })

  it("renders a generic embed", () => {
    renderWithRelay({
      Article: () => ({
        sections: [
          {
            __typename: "ArticleSectionEmbed",
            url: "https://example.com/embed",
          },
        ],
      }),
    })

    expect(screen.getByTestId("ArticleSectionEmbed")).toBeInTheDocument()
  })
})
