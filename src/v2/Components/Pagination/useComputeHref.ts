import { buildUrl } from "v2/Components/ArtworkFilter/Utils/urlBuilder"
import {
  useArtworkFilterContext,
  useCurrentlySelectedFilters,
} from "v2/Components/ArtworkFilter/ArtworkFilterContext"
import { useRouter } from "v2/System/Router/useRouter"
import { stringify } from "qs"

export function useComputeHref() {
  const {
    match: { location },
  } = useRouter()
  const artworkFilterContext = useArtworkFilterContext()
  const currentlySelectedFilters = useCurrentlySelectedFilters()

  // Generic
  if (!artworkFilterContext.mountedContext) {
    return (page: number) =>
      `${location?.pathname}?${stringify({ ...location.query, page })}`
  }

  // Artwork filter-specific
  // (location doesn't update in the case of artwork filter)
  const computeHref = page => {
    const filterState = {
      ...currentlySelectedFilters,
      page,
    }

    const href = buildUrl(filterState, { pathname: location?.pathname })
    return href
  }

  return computeHref
}
