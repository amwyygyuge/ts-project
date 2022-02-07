/*
 * @Author: Arthur Cai (arthur.cai@ringcentral.com)
 * @Date: 2022-02-07 17:02:49
 * @Last Modified by: Arthur Cai (arthur.cai@ringcentral.com)
 * @Last Modified time: 2022-02-07 22:59:47
 */
const path = require('path');

module.exports = {
  appIndex: path.resolve(__dirname, '../src/index'),
  appSrc: path.resolve(__dirname, '../src'),
  build: path.resolve(__dirname, '../dist'),
  public: path.resolve(__dirname, '../public'),
  publicHtml: path.resolve(__dirname, '../public/index.html'),
};
