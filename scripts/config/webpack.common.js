const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("../paths");
const { isDevelopment } = require("../constants");
const {
  getCssLoaders,
  fontLoader,
  urlLoader,
  babelLoader,
} = require("../loader");

module.exports = {
  entry: {
    app: path.appIndex,
  },
  output: {
    filename: `js/[name]${isDevelopment ? "" : ".[hash:8]"}.js`,
    path: path.build,
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
      "@": path.appSrc,
      "@/Components": path.component,
      "@/Utils": path.utils,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.publicHtml,
      filename: "index.html",
      cache: false, // 特别重要：防止之后使用v6版本 copy-webpack-plugin 时代码修改一刷新页面为空问题。
      minify: isDevelopment
        ? false
        : {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            removeComments: true,
            collapseBooleanAttributes: true,
            collapseInlineTagWhitespace: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            minifyCSS: true,
            minifyJS: true,
            minifyURLs: true,
            useShortDoctype: true,
          },
    }),
  ],
};
