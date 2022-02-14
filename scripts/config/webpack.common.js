//  自动引入js
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 复制资源文件
const CopyPlugin = require("copy-webpack-plugin");
// 构建进度
const WebpackBar = require("webpackbar");
// ts 检查
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
// ts 路径引入
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
// eslint
const ESLintPlugin = require("eslint-webpack-plugin");

const path = require("path");

const paths = require("../paths");
const { isDevelopment } = require("../constants");
const {
  getCssLoaders,
  fontLoader,
  urlLoader,
  babelLoader,
  // tsLoader,
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
      // tsLoader,
      babelLoader,
      {
        test: /\.css$/,
        use: getCssLoaders(0),
      },
      fontLoader,
      urlLoader,
    ],
  },
  optimization: {
    // 分 chunks
    splitChunks: {
      chunks: "all",
    },
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
    new TsconfigPathsPlugin({
      configFile: paths.tsConfig,
    }),
    new WebpackBar({
      name: isDevelopment ? "RUNNING" : "BUNDLING",
      color: isDevelopment ? "#52c41a" : "#722ed1",
    }),
    // new ForkTsCheckerWebpackPlugin({
    //   typescript: {
    //     diagnosticOptions: {
    //       semantic: true,
    //       syntactic: true,
    //     },
    //     mode: "write-references",
    //   },
    // }),

    new ESLintPlugin({
      // Plugin options
      extensions: ["js", "mjs", "jsx", "ts", "tsx"],
      eslintPath: require.resolve("eslint"),
      failOnError: true,
      context: paths.appSrc,
      cache: true,
      cacheLocation: path.resolve(paths.cache, ".eslintcache"),
      // ESLint class options
      cwd: paths.root,
      resolvePluginsRelativeTo: __dirname,
    }),
  ],
};
