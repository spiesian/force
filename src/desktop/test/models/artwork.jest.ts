import _ from "underscore"
// @ts-ignore
import should from "should"
import sinon from "sinon"
import Backbone from "backbone"
import { fabricate } from "@artsy/antigravity"
const { Artwork } = require("../../models/artwork")

describe("Artwork", () => {
  let testContext: { artwork: any } = { artwork: null }

  beforeEach(() => {
    sinon.stub(Backbone, "sync")
    testContext.artwork = new Artwork(fabricate("artwork"), { parse: true })
  })

  afterEach(() => {
    Backbone.sync.restore()
  })

  describe("#saleMessage", () => {
    it("returns sold when artwork is sold (w/ or w/o price)", () => {
      testContext.artwork.set({ sale_message: "$6,000 - Sold" })
      testContext.artwork.saleMessage().should.equal("Sold")
      testContext.artwork.set({ sale_message: "Sold" })
      testContext.artwork.saleMessage().should.equal("Sold")
    })

    it("returns On loan when artwork is on loan", () => {
      testContext.artwork.set({ availability: "on loan" })
      testContext.artwork.saleMessage().should.equal("On loan")
    })

    it("returns the price when on hold", () => {
      testContext.artwork.set({ availability: "on hold", price: "$420" })
      testContext.artwork.saleMessage().should.equal("$420, on hold")
      testContext.artwork.unset("price")
      testContext.artwork.saleMessage().should.equal("On hold")
    })

    describe('sale_message is "Contact for Price" or availability is "not for sale" or "permanent collection"', () => {
      it("returns undefined", () => {
        testContext.artwork.set({ availability: "permanent collection" })
        _.isUndefined(testContext.artwork.saleMessage()).should.be.true()
        testContext.artwork.set({
          availability: "for sale",
          price: "$6,000",
          sale_message: "Contact For Price",
        })
        _.isUndefined(testContext.artwork.saleMessage()).should.be.true()
        testContext.artwork.unset("sale_message", "price")
        testContext.artwork.set({ availability: "not for sale" })
        _.isUndefined(testContext.artwork.saleMessage()).should.be.true()
      })
    })
  })

  describe("#downloadableFilename", () => {
    it("returns a human readable filename", () => {
      testContext.artwork
        .downloadableFilename()
        .should.equal("andy-warhol-skull-1999.jpg")
    })
  })

  describe("#downloadableUrl", () => {
    describe("as a normal user", () => {
      it('returns the URL to the "larger" file', () => {
        testContext.artwork.downloadableUrl().should.containEql("larger.jpg")
        testContext.artwork
          .downloadableUrl({
            isTeam() {
              return false
            },
          })
          .should.containEql("larger.jpg")
      })
    })

    describe("as an admin", () => {
      it('returns the URL to the "original" file', () => {
        testContext.artwork
          .downloadableUrl({
            isTeam() {
              return true
            },
          })
          .should.containEql("original.jpg")
      })
    })
  })

  describe("display conditions:", () => {
    describe("can be downloadable", () => {
      it("is downloadable if it is downloadable", () => {
        testContext.artwork.defaultImage().set("downloadable", false)
        testContext.artwork.isDownloadable().should.be.false()
        testContext.artwork.defaultImage().set("downloadable", true)
        testContext.artwork.isDownloadable().should.be.true()
      })

      it("is downloadable no matter what if the user is an admin", () => {
        testContext.artwork.defaultImage().set("downloadable", false)
        testContext.artwork.isDownloadable().should.be.false()
        testContext.artwork
          .isDownloadable({
            isTeam() {
              return false
            },
          })
          .should.be.false()
        testContext.artwork
          .isDownloadable({
            isTeam() {
              return true
            },
          })
          .should.be.true()
      })
    })

    it("can have a price displayed", () => {
      sinon.stub(testContext.artwork, "isMultipleEditions").returns(false)
      sinon
        .stub(testContext.artwork, "isUnavailableButInquireable")
        .returns(false)
      testContext.artwork.set({ inquireable: true, price: "existy" })
      testContext.artwork.isPriceDisplayable().should.be.true()
      testContext.artwork.set({ inquireable: false, sold: true })
      testContext.artwork.isPriceDisplayable().should.be.true()
      testContext.artwork.set({ inquireable: false, sold: false })
      testContext.artwork.isPriceDisplayable().should.be.false()
      testContext.artwork.set({ inquireable: true, price: undefined })
      testContext.artwork.isPriceDisplayable().should.be.false()
      testContext.artwork.set({ inquireable: true, price: "existy" })
      testContext.artwork.isPriceDisplayable().should.be.true()
      testContext.artwork.isMultipleEditions.restore()
      testContext.artwork.isUnavailableButInquireable.restore()
    })

    it("can have multiple editions", () => {
      testContext.artwork.set("edition_sets", undefined)
      testContext.artwork.isMultipleEditions().should.be.false()
      testContext.artwork.set("edition_sets", [0])
      testContext.artwork.isMultipleEditions().should.be.false()
      testContext.artwork.set("edition_sets", [0, 0])
      testContext.artwork.isMultipleEditions().should.be.true()
    })

    it("normalizes dimensions", () => {
      testContext.artwork.set({ dimensions: { cm: "10 × 200 × 30cm" } })
      testContext.artwork.normalizedDimensions().should.eql([10, 200, 30])
      testContext.artwork.set({ dimensions: { cm: "10 × 200 × 30" } })
      testContext.artwork.normalizedDimensions().should.eql([10, 200, 30])
      testContext.artwork.set({ dimensions: { cm: "101 × 20cm" } })
      testContext.artwork.normalizedDimensions().should.eql([101, 20])
      testContext.artwork.set({ dimensions: { cm: "1525cm" } })
      testContext.artwork.normalizedDimensions().should.eql([1525])
    })

    it("might be too big (more than 1524 cmches on a side)", () => {
      testContext.artwork.set({ dimensions: { cm: "10 × 20cm" } })
      testContext.artwork.tooBig().should.be.false()
      testContext.artwork.set({ dimensions: { cm: "1524 × 1524cm" } })
      testContext.artwork.tooBig().should.be.false()
      testContext.artwork.set({ dimensions: { cm: "1524.5 × 1524cm" } })
      testContext.artwork.tooBig().should.be.true()
      testContext.artwork.set({ dimensions: { cm: "1524 × 1525cm" } })
      testContext.artwork.tooBig().should.be.true()
    })

    it("can be hung", () => {
      testContext.artwork.set({ depth: undefined, height: 1, width: "1" })
      testContext.artwork.set("category", "Design")
      testContext.artwork.isHangable().should.be.false()
      testContext.artwork.set("category", "Painting")
      testContext.artwork.isHangable().should.be.true()
      testContext.artwork.set("depth", 1)
      testContext.artwork.isHangable().should.be.false()
      testContext.artwork.unset("depth")
      testContext.artwork.set({ dimensions: { cm: "1524 × 20cm" } })
      testContext.artwork.isHangable().should.be.true()
      testContext.artwork.set({ dimensions: { cm: "1525 × 20cm" } })
      testContext.artwork.isHangable().should.be.false()
      testContext.artwork.set({ dimensions: { cm: "1524 × 20cm" } })
      testContext.artwork.isHangable().should.be.true()
      testContext.artwork.set("diameter", 1)
      testContext.artwork.isHangable().should.be.false()
    })

    describe("#isContactable", () => {
      it("can be contacted given the correct flags", () => {
        testContext.artwork.set({
          acquireable: false,
          forsale: true,
          partner: "existy",
        })
        testContext.artwork.isContactable().should.be.true()
        testContext.artwork.set({
          acquireable: true,
          forsale: true,
          partner: "existy",
        })
        testContext.artwork.isContactable().should.be.false()
        testContext.artwork.set({
          acquireable: false,
          forsale: false,
          partner: "existy",
        })
        testContext.artwork.isContactable().should.be.false()
        testContext.artwork.set({
          acquireable: false,
          forsale: true,
          partner: undefined,
        })
        testContext.artwork.isContactable().should.be.false()
      })
    })

    it("might be unavailable... but inquireable", () => {
      testContext.artwork.set({
        forsale: false,
        inquireable: true,
        sold: false,
      })
      testContext.artwork.isUnavailableButInquireable().should.be.true()
      testContext.artwork.set({ forsale: true, inquireable: true, sold: false })
      testContext.artwork.isUnavailableButInquireable().should.be.false()
      testContext.artwork.set({ forsale: false, inquireable: true, sold: true })
      testContext.artwork.isUnavailableButInquireable().should.be.false()
    })
  })

  describe("#hasDimension", () => {
    it("returns true on any attribute vaguely numeric", () => {
      testContext.artwork.set({ width: 1 })
      testContext.artwork.hasDimension("width").should.be.true()
      testContext.artwork.set({ width: "nope" })
      testContext.artwork.hasDimension("width").should.be.false()
      testContext.artwork.set({ width: "1 nope" })
      testContext.artwork.hasDimension("width").should.be.true()
      testContext.artwork.set({ width: "1 1/2 in" })
      testContext.artwork.hasDimension("width").should.be.true()
      testContext.artwork.unset("width")
      testContext.artwork.hasDimension("width").should.be.false()
    })
  })

  describe("#hasMoreInfo", () => {
    it("has more info", () => {
      testContext.artwork.set({
        additional_information: undefined,
        exhibition_history: "",
        literature: undefined,
        provenance: undefined,
        signature: "",
      })
      testContext.artwork.hasMoreInfo().should.be.false()
      testContext.artwork.set("literature", "existy")
      testContext.artwork.hasMoreInfo().should.be.true()
    })

    it("has more info when there is a blurb", () => {
      testContext.artwork.clear()
      testContext.artwork.hasMoreInfo().should.be.false()
      testContext.artwork.set("blurb", "existy")
      testContext.artwork.hasMoreInfo().should.be.true()
    })
  })

  describe("#titleAndYear", () => {
    it("returns empty string without title or year", () => {
      testContext.artwork.set({ date: false, title: false })
      testContext.artwork.titleAndYear().should.equal("")
    })

    it("renderes correctly with just a date", () => {
      testContext.artwork.set({ date: "1905", title: false })
      testContext.artwork.titleAndYear().should.equal("1905")
    })

    it("emphasises the title", () => {
      testContext.artwork.set({ date: "1905", title: "title" })
      testContext.artwork.titleAndYear().should.equal("<em>title</em>, 1905")
    })
  })

  describe("#href", () => {
    it("creates an href for linking to this artwork", () => {
      testContext.artwork
        .href()
        .should.equal(`/artwork/${testContext.artwork.get("id")}`)
    })
  })

  describe("#toAltText", () => {
    it("Includes title, date and artist name", () => {
      testContext.artwork
        .toAltText()
        .should.equal("Andy Warhol, 'Skull,' 1999, Gagosian Gallery")
    })

    it("Works without title, date, partner, and artist name", () => {
      testContext.artwork.set({
        artist: undefined,
        date: undefined,
        partner: undefined,
        title: undefined,
      })
      testContext.artwork.toAltText().should.equal("")
    })
  })

  describe("artistName", () => {
    it("renders correctly", () => {
      new Artwork({ forsale: false, title: "title" })
        .artistName()
        .should.equal("")
      new Artwork({
        artist: { name: undefined },
        forsale: false,
        title: "title",
      })
        .artistName()
        .should.equal("")
      new Artwork({
        artists: [{ name: undefined }],
        forsale: false,
        title: "title",
      })
        .artistName()
        .should.equal("")
      new Artwork({
        artist: { name: "popeye the sailor" },
        forsale: false,
        title: "title",
      })
        .artistName()
        .should.equal("popeye the sailor")
      new Artwork({
        artists: [{ name: "cap'n crunch" }],
        forsale: false,
        title: "title",
      })
        .artistName()
        .should.equal("cap'n crunch")
      new Artwork({
        artists: [{ name: "cap'n crunch" }, { name: "popeye the sailor" }],
        forsale: false,
        title: "title",
      })
        .artistName()
        .should.equal("cap'n crunch")
      new Artwork({
        artists: [{ name: undefined }, { name: "so and so" }],
        forsale: false,
        title: "title",
      })
        .artistName()
        .should.equal("so and so")
      new Artwork({
        artist: { name: undefined },
        artists: [{ name: "so and so" }],
        forsale: false,
        title: "title",
      })
        .artistName()
        .should.equal("so and so")
    })
  })

  describe("artistsNames", () => {
    it("renders correctly", () => {
      new Artwork({ forsale: false, title: "title" })
        .artistsNames()
        .should.equal("")
      new Artwork({
        artist: { name: "john doe" },
        forsale: false,
        title: "title",
      })
        .artistsNames()
        .should.equal("john doe")
      new Artwork({
        artists: [{ name: "john doe" }, { name: "mark twain" }],
        forsale: false,
        title: "title",
      })
        .artistsNames()
        .should.equal("john doe and mark twain")
      new Artwork({
        artists: [{ name: undefined }, { name: "mark twain" }],
        forsale: false,
        title: "title",
      })
        .artistsNames()
        .should.equal("mark twain")
      new Artwork({
        artists: [
          { name: "john doe" },
          { name: "mark twain" },
          { name: "joey pepperoni" },
        ],
        forsale: false,
        title: "title",
      })
        .artistsNames()
        .should.equal("john doe, mark twain and joey pepperoni")
      new Artwork({
        artists: [
          { name: undefined },
          { name: "mark twain" },
          { name: "joey pepperoni" },
        ],
        forsale: false,
        title: "title",
      })
        .artistsNames()
        .should.equal("mark twain and joey pepperoni")
    })
  })

  describe("#toPageTitle", () => {
    it("renders correctly", () => {
      new Artwork({ forsale: false, title: "" })
        .toPageTitle()
        .should.equal("Artsy")
      new Artwork({ forsale: false, title: "title" })
        .toPageTitle()
        .should.equal("title | Artsy")
      new Artwork({ forsale: true, title: "title" })
        .toPageTitle()
        .should.equal("title, Available for Sale | Artsy")
      new Artwork({
        artist: { name: "john doe" },
        forsale: false,
        title: "title",
      })
        .toPageTitle()
        .should.equal("john doe | title | Artsy")
      new Artwork({
        artists: [{ name: "john doe" }, { name: "santa claus" }],
        forsale: false,
        title: "title",
      })
        .toPageTitle()
        .should.equal("john doe and santa claus | title | Artsy")
      new Artwork({
        artists: [
          { name: "john doe" },
          { name: "santa claus" },
          { name: "hello kitty" },
        ],
        forsale: false,
        title: "title",
      })
        .toPageTitle()
        .should.equal("john doe, santa claus and hello kitty | title | Artsy")
      new Artwork({ artist: { name: "last" }, forsale: false, title: "" })
        .toPageTitle()
        .should.equal("last | Artsy")
      new Artwork({ date: "2010", forsale: false, title: "title" })
        .toPageTitle()
        .should.equal("title (2010) | Artsy")
      new Artwork({
        artist: { name: "last" },
        date: "2010",
        forsale: false,
        title: "title",
      })
        .toPageTitle()
        .should.equal("last | title (2010) | Artsy")
      new Artwork({
        artist: { name: "first last" },
        date: "2010-2011",
        forsale: false,
        title: "title",
      })
        .toPageTitle()
        .should.equal("first last | title (2010-2011) | Artsy")
      new Artwork({
        artist: { name: "first last" },
        date: "2010, 2011, 2012",
        forsale: false,
        title: "title",
      })
        .toPageTitle()
        .should.equal("first last | title (2010, 2011, 2012) | Artsy")
    })
  })

  describe("#toPageDescription", () => {
    it("renders correctly", () => {
      new Artwork({ title: "title" }).toPageDescription().should.equal("title")
      new Artwork({
        forsale: false,
        partner: { name: "partner" },
        title: "title",
      })
        .toPageDescription()
        .should.equal("From partner, title")
      new Artwork({
        forsale: true,
        partner: { name: "partner" },
        title: "title",
      })
        .toPageDescription()
        .should.equal("Available for sale from partner, title")
      new Artwork({
        dimensions: { in: "2 × 1 × 3 in" },
        forsale: false,
        metric: "in",
        title: "title",
      })
        .toPageDescription()
        .should.equal("title, 2 × 1 × 3 in")
      new Artwork({
        dimensions: { in: "2 × 1 × 3 in" },
        forsale: false,
        medium: "Awesomeness",
        metric: "in",
        title: "title",
      })
        .toPageDescription()
        .should.equal("title, Awesomeness, 2 × 1 × 3 in")
      new Artwork({
        dimensions: { cm: "45000000 × 2000000000 cm" },
        forsale: false,
        metric: "cm",
        title: "title",
      })
        .toPageDescription()
        .should.equal("title, 45000000 × 2000000000 cm")
      new Artwork({
        dimensions: { cm: "45000000 × 2000000000 cm" },
        forsale: false,
        medium: "Awesomeness",
        metric: "cm",
        title: "title",
      })
        .toPageDescription()
        .should.equal("title, Awesomeness, 45000000 × 2000000000 cm")
      new Artwork({
        dimensions: { cm: "20 cm diameter" },
        forsale: false,
        metric: "cm",
        title: "title",
      })
        .toPageDescription()
        .should.equal("title, 20 cm diameter")
      new Artwork({
        dimensions: { cm: "20 cm diameter" },
        forsale: false,
        medium: "Awesomeness",
        metric: "cm",
        title: "title",
      })
        .toPageDescription()
        .should.equal("title, Awesomeness, 20 cm diameter")
      new Artwork({
        artist: { name: "first last" },
        dimensions: { cm: "20 cm diameter" },
        forsale: false,
        medium: "Awesomeness",
        metric: "cm",
        title: "title",
      })
        .toPageDescription()
        .should.equal("first last, title, Awesomeness, 20 cm diameter")
    })
  })

  describe("#toJSONLD", () => {
    it("returns valid json", () => {
      const json = testContext.artwork.toJSONLD()
      json["@context"].should.equal("http://schema.org")
      json["@type"].should.equal("CreativeWork")
      json.name.should.equal("Skull")
    })
  })
})
