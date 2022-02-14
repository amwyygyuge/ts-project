const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 分离css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 压缩css
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// 压缩js
const TerserPlugin = require("terser-webpack-plugin");
// 包大小分析
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const common = require("./webpack.common.js");

const { shouldAnalyze, ANALYZE_HOST, ANALYZE_PORT } = require("../constants");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          compress: { pure_funcs: ["console.log"] },
        },
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
      ignoreOrder: false,
    }),
    shouldAnalyze &&
      new BundleAnalyzerPlugin({
        analyzerMode: "server",
        analyzerHost: ANALYZE_HOST,
        analyzerPort: ANALYZE_PORT,
      }),
  ].filter(Boolean),
});
