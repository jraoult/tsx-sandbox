const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = (env) => {
  const isServe = env.WEBPACK_SERVE === true;

  return {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: ["last 1 chrome versions"],
                  },
                ],
                ["@babel/preset-typescript"],
                [
                  "@babel/preset-react",
                  { runtime: "automatic", importSource: "@emotion/react" },
                ],
              ],
              plugins: [
                ["@babel/plugin-proposal-decorators", { legacy: true }],
                ["@babel/plugin-proposal-class-properties"],
                ["@emotion/babel-plugin"],
                isServe && ["react-refresh/babel"],
              ].filter(Boolean),
            },
          },
        },
      ],
    },
    devServer: {
      hot: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./template.html",
      }),
      isServe && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
  };
};
