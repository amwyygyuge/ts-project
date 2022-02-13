const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const WebpackBar = require("webpackbar");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const paths = require("../paths");
const { isDevelopment } = require("../constants");
const {
  getCssLoaders,
  fontLoader,
  urlLoader,
  babelLoader,
} = require("../loader");

module.exports = {
  entry: {
    app: paths.appIndex,
  },
  cache: {
    type: "filesystem", // 使用文件缓存
  },
  output: {
    filename: `js/[name]${isDevelopment ? "" : ".[hash:8]"}.js`,
    path: paths.build,
  },
  module: {
    rules: [
      babelLoader,
      {
        test: /\.css$/,
        use: getCssLoaders(0),
      },
      fontLoader,
      urlLoader,
    ],
  },

  resolve: {
    extensions: [".js", ".json", ".ts", ".tsx"],
    alias: {
      "@": paths.appSrc,
      "@/Components": paths.component,
      "@/Utils": paths.utils,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: paths.publicHtml,
      filename: "index.html",
      cache: false, // 特别重要：防止之后使用v6版本 copy-webpack-plugin 时代码修改一刷新页面为空问题。
    }),
    new CopyPlugin({
      patterns: [
        {
          context: paths.public,
          from: "*",
          to: paths.build,
          toType: "dir",
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
    new WebpackBar({
      name: isDevelopment ? "RUNNING" : "BUNDLING",
      color: isDevelopment ? "#52c41a" : "#722ed1",
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: "write-references",
      },
    }),
  ],
};
