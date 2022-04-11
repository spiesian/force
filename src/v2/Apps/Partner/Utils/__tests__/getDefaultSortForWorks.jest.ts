import { getDefaultSortForWorks } from "../getDefaultSortForWorks"

describe("getDefaultSortForWorks", () => {
  it("should return `-decayed_merch` when only partner id is passed", () => {
    const result = getDefaultSortForWorks("partner-id")

    expect(result).toBe("-decayed_merch")
  })

  it("should return `-decayed_merch` when partner id and default sort are passed", () => {
    const result = getDefaultSortForWorks("partner-id", "-decayed_merch")

    expect(result).toBe("-decayed_merch")
  })

  it("should return `-decayed_merch` when `artsy-2` id and custom sort are passed", () => {
    const result = getDefaultSortForWorks("artsy-2", "-year")

    expect(result).toBe("-year")
  })

  it("should return `-partner_updated_at` when only `artsy-2` id is passed", () => {
    const result = getDefaultSortForWorks("artsy-2")

    expect(result).toBe("-partner_updated_at")
  })

  it("should return `-partner_updated_at` sort when `artsy-2` id and default sort are passed", () => {
    const result = getDefaultSortForWorks("artsy-2", "-decayed_merch")

    expect(result).toBe("-partner_updated_at")
  })
})
