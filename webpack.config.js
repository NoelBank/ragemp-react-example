// const webpack = require("webpack");

module.exports = {
  entry: {
    browser: "./src/index.tsx",
    client: "./src/client.ts",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/typescript",
              ],
            },
          },
        ],
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        options: {
          limit: 100000
        },
        loader: "url-loader",        
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
  },
  output: {
    path: __dirname + "/client_packages/nbank",
    publicPath: "/",
    filename: "[name].js",
  },
  plugins: [],
  devServer: {
    static: {
      directory: "./client_packages/nbank",
    },
  },
};
