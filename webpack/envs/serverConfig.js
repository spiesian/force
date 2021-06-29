// @ts-check

import nodeExternals from "webpack-node-externals"
import path from "path"
import webpack from "webpack"
import { basePath, env } from "../utils/env"
import { esbuildMinimizer } from "./commonEnv"
import { jadeLoader } from "./commonLoaders"

export const serverConfig = {
  devtool: env.webpackDevtool || "source-map",
  entry: path.join(basePath, "src/index.js"),
  externals: [nodeExternals()],
  mode: env.webpackDebug ? "development" : env.nodeEnv,
  module: {
    rules: [
      {
        include: [
          path.resolve(basePath, "src"),
          path.resolve(basePath, "node_modules/artsy-ezel-components"),
        ],
        test: /\.coffee$/,
        use: ["coffee-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
      {
        include: path.resolve(basePath, "src"),
        test: /\.jsx?$/,
        loader: "esbuild-loader",
        options: {
          loader: "jsx", // Remove this if you're not using JSX
          target: "es2015", // Syntax to compile to (see options below for possible values)
        },
      },
      {
        include: path.resolve(basePath, "src"),
        test: /\.tsx?$/,
        loader: "esbuild-loader",
        options: {
          loader: "tsx", // Or 'ts' if you don't need tsx
          target: "es2015",
        },
      },
      jadeLoader,
    ],
  },
  node: {
    __dirname: true,
  },
  optimization: {
    minimize: env.isProduction && !env.webpackDebug && !env.fastProductionBuild,
    minimizer: esbuildMinimizer,
  },
  output: {
    chunkFilename: "[name].bundle.js",
    filename: "server.dist.js",
    path: path.resolve(basePath),
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".coffee"],
    modules: [path.resolve(basePath, "src"), "node_modules"],
  },
  target: "node",
}
