const flexBugsFixes = require("postcss-flexbugs-fixes");
const presetEnv = require("postcss-preset-env");
const normalize = require("postcss-normalize");
// 分离css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const os = require("os");
const paths = require("./paths");

const { isDevelopment, imageInlineSizeLimit } = require("./constants");

const babelOptions = {
  cacheDirectory: true,
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
      },
    ],
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: {
          version: 3,
          proposals: true,
        },
        useESModules: true,
      },
    ],
  ],
};

const postCSSLoader = {
  loader: "postcss-loader",
  options: {
    postcssOptions: {
      plugins: [
        flexBugsFixes,
        presetEnv({
          autoprefixer: {
            grid: true,
            flexbox: "no-2009",
          },
          stage: 3,
        }),
        normalize,
      ],
    },
    sourceMap: isDevelopment,
  },
};

const getCssLoaders = (importLoaders) => [
  isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
  {
    loader: "css-loader",
    options: {
      modules: false, // 默认就是 false, 若要开启，可在官网具体查看可配置项
      sourceMap: isDevelopment, // 开启后与 devtool 设置一致, 开发环境开启，生产环境关闭
      importLoaders, // 指定在 CSS loader 处理前使用的 laoder 数量
    },
  },
  postCSSLoader,
];

const urlLoader = {
  test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
  include: paths.assets,
  type: "asset",
  parser: {
    dataUrlCondition: {
      maxSize: imageInlineSizeLimit,
    },
  },
};

const fontLoader = {
  test: /\.(eot|svg|ttf|woff|woff2?)$/,
  include: paths.assets,
  type: "asset/resource",
};

const babelLoader = {
  test: /\.(tsx?|js)$/,
  use: [
    {
      loader: "thread-loader",
      // loaders with equal options will share worker pools
      options: {
        // the number of spawned workers, defaults to (number of cpus - 1) or
        // fallback to 1 when require('os').cpus() is undefined
        workers: os.cpus(),

        // number of jobs a worker processes in parallel
        // defaults to 20
        workerParallelJobs: 50,

        // additional node.js arguments
        workerNodeArgs: ["--max-old-space-size=1024"],

        // Allow to respawn a dead worker pool
        // respawning slows down the entire compilation
        // and should be set to false for development
        poolRespawn: false,

        // timeout for killing the worker processes when idle
        // defaults to 500 (ms)
        // can be set to Infinity for watching builds to keep workers alive
        poolTimeout: 2000,

        // number of jobs the poll distributes to the workers
        // defaults to 200
        // decrease of less efficient but more fair distribution
        poolParallelJobs: 50,

        // name of the pool
        // can be used to create different pools with elsewise identical options
        name: "my-pool",
      },
    },
    {
      loader: "babel-loader",
      options: babelOptions,
    },
  ],
  include: paths.appSrc,
  exclude: /node_modules/,
};

const tsLoader = {
  test: /\.(tsx?)$/,
  include: paths.appSrc,
  use: [
    {
      loader: "babel-loader",
      options: babelOptions,
    },
    {
      loader: "ts-loader",
      options: {
        configFile: paths.configFile,
      },
    },
  ],
  exclude: /node_modules/,
};

module.exports = {
  postCSSLoader,
  getCssLoaders,
  fontLoader,
  urlLoader,
  babelLoader,
  tsLoader,
};
