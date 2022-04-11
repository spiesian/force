const DEFAULT_SORT = "-decayed_merch"

export const getDefaultSortForWorks = (
  partnerId: string,
  sort = DEFAULT_SORT
) => {
  if (partnerId === "artsy-2" && sort === DEFAULT_SORT) {
    return "-partner_updated_at"
  }

  return sort
}
