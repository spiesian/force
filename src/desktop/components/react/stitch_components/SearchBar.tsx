import { Box } from "@artsy/palette"
import { SearchBarQueryRenderer } from "v2/Components/Search/SearchBar"
import styled from "styled-components"
import "v2/System/i18n/i18n"

const SearchBarContainer = styled(Box)`
  z-index: 100;
`

export const SearchBar = () => (
  <SearchBarContainer>
    <SearchBarQueryRenderer />
  </SearchBarContainer>
)
