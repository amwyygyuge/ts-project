/*
 * @Author: Arthur Cai (arthur.cai@ringcentral.com)
 * @Date: 2022-02-07 17:02:49
 * @Last Modified by: Arthur Cai (arthur.cai@ringcentral.com)
 * @Last Modified time: 2022-02-13 23:33:10
 */
const path = require("path");
const { PROJECT_PATH } = require("./constants");

module.exports = {
  appIndex: path.resolve(PROJECT_PATH, "src/index"),
  root: path.resolve(PROJECT_PATH, "."),
  appSrc: path.resolve(PROJECT_PATH, "src"),
  build: path.resolve(PROJECT_PATH, "dist"),
  public: path.resolve(PROJECT_PATH, "public"),
  publicHtml: path.resolve(PROJECT_PATH, "public/index.html"),
  component: path.resolve(PROJECT_PATH, "src/components"),
  utils: path.resolve(PROJECT_PATH, "src/utils"),
  tsConfig: path.resolve(PROJECT_PATH, "tsconfig.json"),
  assets: path.resolve(PROJECT_PATH, "assets"),
  nodeModule: path.resolve(PROJECT_PATH, "node_modules"),
  cache: path.resolve(PROJECT_PATH, "node_modules", ".cache"),
};
