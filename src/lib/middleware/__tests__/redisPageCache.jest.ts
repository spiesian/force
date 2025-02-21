import { redisPageCacheMiddleware } from "../redisPageCache"

const { cache } = require("lib/cache")

jest.mock("lib/cache", () => ({
  cache: {
    get: jest.fn((key, cb) => {
      return cb()
    }),
    set: jest.fn(),
  },
}))

jest.mock("config", () => ({
  PAGE_CACHE_ENABLED: true,
  PAGE_CACHE_TYPES: "artist",
  PAGE_CACHE_NAMESPACE: "page-cache",
  PAGE_CACHE_VERSION: "1",
  PAGE_CACHE_EXPIRY_SECONDS: 600,
  PAGE_CACHE_RETRIEVAL_TIMEOUT_MS: 400,
}))

describe("pageCacheMiddleware", () => {
  let req
  let res
  let next
  beforeEach(() => {
    req = {
      method: "GET",
      path: "/artist/test-artist",
      url: "https://artsy.net/artist/test-artist",
    }
    res = {
      once: jest.fn((_e, cb) => cb()),
      locals: {
        PAGE_CACHE: {
          status: 200,
          key: "key",
          html: "html",
        },
        sd: {
          FEATURE_FLAGS: {
            "feature-a": {
              flagEnabled: true,
              variant: {
                enabled: true,
                name: "variant-a",
              },
            },
            "feature-b": {
              flagEnabled: false,
              variant: {
                enabled: false,
                name: "disabled",
              },
            },
          },
        },
      },
      statusCode: 200,
      _headers: {
        "content-type": "text/html; charset=utf-8",
      },
    }
    next = jest.fn()
    cache.get.mockClear()
    cache.set.mockClear()
  })

  it("sets up cache for valid pageTypes", async () => {
    redisPageCacheMiddleware(req, res, next)
    expect(cache.set).toBeCalledWith(
      "page-cache|feature-a:variant-a|1|https://artsy.net/artist/test-artist",
      expect.anything(),
      600
    )
    expect(cache.get.mock.calls[0][0]).toBe(
      "page-cache|feature-a:variant-a|1|https://artsy.net/artist/test-artist"
    )
    await new Promise<void>(resolve => {
      setTimeout(() => {
        resolve()
      }, 100)
    })
    expect(next).toBeCalled()
  })

  it("skips cache for invalid pageTypes", async () => {
    req = {
      method: "GET",
      path: "/artist-series/test-artist",
      url: "https://artsy.net/artist-series/test-artist",
    }
    redisPageCacheMiddleware(req, res, next)
    expect(cache.set).not.toBeCalled()
    expect(cache.get).not.toBeCalled()
    expect(next).toBeCalled()
  })
})
