import { graphql } from "react-relay"
import { setupTestWrapperTL } from "v2/DevTools/setupTestWrapper"
import { CellPartnerFragmentContainer_Test_Query } from "v2/__generated__/CellPartnerFragmentContainer_Test_Query.graphql"
import { screen } from "@testing-library/react"
import { CellPartnerFragmentContainer } from "../CellPartner"

jest.unmock("react-relay")

jest.mock("v2/Components/FollowButton/FollowProfileButton", () => ({
  FollowProfileButtonFragmentContainer: () => null,
}))

const { renderWithRelay } = setupTestWrapperTL<
  CellPartnerFragmentContainer_Test_Query
>({
  Component: CellPartnerFragmentContainer,
  query: graphql`
    query CellPartnerFragmentContainer_Test_Query @relay_test_operation {
      partner(id: "example") {
        ...CellPartner_partner
      }
    }
  `,
})

describe("CellPartner", () => {
  it("renders the component", () => {
    renderWithRelay({
      Partner: () => ({
        name: "Example Gallery",
      }),
    })

    expect(screen.getByText("Example Gallery")).toBeInTheDocument()
  })

  describe("without image", () => {
    it("renders the initials instead", () => {
      renderWithRelay({
        Profile: () => ({
          image: null,
        }),
        Partner: () => ({
          name: "Example Gallery",
          initials: "EG",
        }),
      })

      expect(screen.getByText("EG")).toBeInTheDocument()
    })
  })
})
