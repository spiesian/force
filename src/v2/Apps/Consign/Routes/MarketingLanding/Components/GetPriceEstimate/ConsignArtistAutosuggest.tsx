import React, { useEffect } from "react"
import { AutocompleteInput } from "@artsy/palette"
import { usePriceEstimateContext } from "./ConsignPriceEstimateContext"
import { useTracking } from "react-tracking"
import { Suggestion as ConsignSearchSuggestion } from "v2/Apps/Consign/Routes/MarketingLanding/Components/GetPriceEstimate/ConsignPriceEstimateContext"
import {
  ContextModule,
  OwnerType,
  focusedOnSearchInput,
  searchedWithNoResults,
  selectedItemFromSearch,
} from "@artsy/cohesion"
import { debounce } from "lodash"

export const ConsignArtistAutosuggest: React.FC = () => {
  const {
    fetchSuggestions,
    searchQuery,
    selectSuggestion,
    setSearchQuery,
    suggestions,
  } = usePriceEstimateContext()

  const tracking = useTracking()

  const trackFocusedOnSearchInput = () => {
    tracking.trackEvent(
      focusedOnSearchInput({
        context_module: ContextModule.priceEstimate,
        context_owner_type: OwnerType.consign,
      })
    )
  }

  const trackSelectedItemFromSearch = (
    suggestion: NonNullable<ConsignSearchSuggestion>["node"]
  ) => {
    tracking.trackEvent(
      selectedItemFromSearch({
        context_module: ContextModule.priceEstimate,
        context_owner_type: OwnerType.consign,
        owner_id: suggestion?.internalID!,
        owner_slug: suggestion?.slug!,
        owner_type: OwnerType.artist,
        query: searchQuery!,
      })
    )
  }

  const trackSearchedWithNoResults = () => {
    tracking.trackEvent(
      searchedWithNoResults({
        context_module: ContextModule.priceEstimate,
        context_owner_type: OwnerType.consign,
        query: searchQuery!,
      })
    )
  }

  const debouncedTrackSearchWithNoResults = debounce(
    trackSearchedWithNoResults,
    100,
    { leading: true }
  )

  useEffect(() => {
    if (suggestions?.length === 0) {
      debouncedTrackSearchWithNoResults()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [suggestions])

  const options = (suggestions ?? []).map(suggestion => ({
    text: suggestion?.node?.displayLabel!,
    value: suggestion?.node?.slug!,
  }))

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value
    setSearchQuery?.(query)
    fetchSuggestions?.(query)
  }

  return (
    <AutocompleteInput
      options={options}
      placeholder="Search by artist name"
      onChange={handleChange}
      onFocus={trackFocusedOnSearchInput}
      onSelect={option => {
        const suggestion = suggestions?.find(
          suggestion => suggestion?.node?.slug === option.value
        )

        if (suggestion) {
          trackSelectedItemFromSearch(suggestion as any)
          selectSuggestion?.(suggestion)
        }
      }}
    />
  )
}
