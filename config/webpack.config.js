const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('./paths');

module.exports = env => {
  return {
    target: 'web',
    mode: 'development',
    entry: {
      index: path.appIndex,
    },
    output: {
      // 打包文件根目录
      path: path.build,
      filename: 'bound.js',
    },
    experiments: {
      outputModule: true,
    },
    plugins: [
      new CleanWebpackPlugin(),
      // 生成 index.html
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.publicHtml,
      }),
    ],
    module: {
      rules: [
        // JS 处理
        {
          test: /\.(jsx|js)?$/,
          use: {
            loader: 'babel-loader',
            options: {
              babelrc: true,
              presets: ['@babel/preset-env', '@babel/preset-react'],
              cacheDirectory: true,
            },
          },
        },
        // 静态资源处理
        {
          type: 'asset',
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
        },
      ],
    },
    devServer: {
      port: 3000,
      host: '0.0.0.0',
      open: true,
      hot: true,
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        '@': path.appSrc,
      },
    },
    externals: [/^react\/.+$/, /^react-dom\/.+$/, /^lodash\/.+$/, /^@babel\/runtime\/.+$/],
  };
};
