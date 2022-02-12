/**
 * Feature flag middleware, built on top of Unleash.
 *
 * @see https://github.com/Unleash/unleash-client-node
 * @see https://github.com/Unleash/unleash-express
 */

import { initialize } from "unleash-client"
import { UnleashExpress } from "unleash-express"

export function featureFlagMiddleware() {
  const unleash = initialize({
    url: process.env.UNLEASH_API_URL!,
    appName: process.env.UNLEASH_APP_NAME!,
    environment: process.env.NODE_ENV!,
  })
  const unleashExpress: UnleashExpress = new UnleashExpress(unleash)
  return unleashExpress.middleware()
}
