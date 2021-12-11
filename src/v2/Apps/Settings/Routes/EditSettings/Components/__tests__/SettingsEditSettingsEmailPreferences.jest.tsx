import { screen } from "@testing-library/react"
import { graphql } from "react-relay"
import { setupTestWrapperTL } from "v2/DevTools/setupTestWrapper"
import { SettingsEditSettingsEmailPreferencesFragmentContainer } from "../SettingsEditSettingsEmailPreferences/SettingsEditSettingsEmailPreferences"

jest.unmock("react-relay")

const { renderWithRelay } = setupTestWrapperTL({
  Component: SettingsEditSettingsEmailPreferencesFragmentContainer,
  // PLEASE_FIXME: REMOVE_THIS_COMMENT_RELAY_UPGRADE
  query: graphql`
    query SettingsEditSettingsEmailPreferences_Test_Query {
      me {
        ...SettingsEditSettingsEmailPreferences_me
      }
    }
  `,
})

describe("SettingsEditSettingsEmailPreferences", () => {
  it("renders the form", () => {
    renderWithRelay()

    expect(screen.queryByText("Email Preferences")).toBeInTheDocument()
    expect(screen.queryByText("Frequency")).toBeInTheDocument()
  })
})
