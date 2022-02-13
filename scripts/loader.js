const flexBugsFixes = require("postcss-flexbugs-fixes");
const presetEnv = require("postcss-preset-env");
const normalize = require("postcss-normalize");

const { isDevelopment, imageInlineSizeLimit } = require("./constants");

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
  "style-loader",
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
  type: "asset",
  parser: {
    dataUrlCondition: {
      maxSize: imageInlineSizeLimit,
    },
  },
};

const fontLoader = {
  test: /\.(eot|svg|ttf|woff|woff2?)$/,
  type: "asset/resource",
};

const babelLoader = {
  test: /\.(tsx?|js|ts)$/,
  loader: "babel-loader",
  options: { cacheDirectory: true },
  exclude: /node_modules/,
};

module.exports = {
  postCSSLoader,
  getCssLoaders,
  fontLoader,
  urlLoader,
  babelLoader,
};
