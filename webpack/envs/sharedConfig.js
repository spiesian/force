// @ts-check

import path from "path"
import TerserPlugin from "terser-webpack-plugin"
import { basePath, env } from "../utils/env"

export const devtool = env.webpackDevtool || "eval"
export const productionDevtool = env.webpackDevtool || "source-map"
export const mode = env.webpackDebug ? "development" : env.nodeEnv
export const stats = env.webpackStats || "errors-only"

export const minimizer = [
  new TerserPlugin({
    cache: false,
    // Only use 4 cpus (default) in CircleCI, by default it will try using 36 and OOM
    parallel: env.onCi ? env.webpackCiCpuLimit : true,
    sourceMap: true, // Must be set to true if using source-maps in production
  }),
]

export const resolve = {
  alias: {
    "jquery.ui.widget": "blueimp-file-upload/js/vendor/jquery.ui.widget.js",

    // The following packages need to be resolved to the host app (force) to get
    // around issues involving `yarn link` and multiple instances. A  similar
    // configuration has been setup for SSR in `src/dev`, via `require-control`.
    "styled-components": require.resolve("styled-components"),
    "react/jsx-runtime": require.resolve("react/jsx-runtime"),
    "lodash-es": "lodash",
  },
  extensions: [
    ".mjs",
    ".js",
    ".jsx",
    ".ts",
    ".tsx",
    ".json",
    ".jade",
    ".coffee",
  ],
  // Symlink issues should be fixed via `yarn --pnp`
  modules: [path.resolve(basePath, "src"), "node_modules"],
  symlinks: false,
}

export const externals = {
  // Required because the cacheMiddleware include redis
  redis: "redis",
  // TODO: Needs research to determine if if this is still required
  request: "request",
  // Required because getAsyncStorage isn't using async import()
  async_hooks: "async_hooks",
}
