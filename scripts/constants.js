const path = require("path");

const PROJECT_PATH = path.resolve(__dirname, "../");
const PROJECT_NAME = path.parse(PROJECT_PATH).name;

const isDevelopment = process.env.NODE_ENV !== "production";
const shouldAnalyze = process.env.ANALYZE !== "yes";
const SERVER_HOST = "127.0.0.1";
const ANALYZE_HOST = SERVER_HOST;
const ANALYZE_PORT = "8000";

const SERVER_PORT = "3000";

const imageInlineSizeLimit = 4 * 1024;

module.exports = {
  SERVER_HOST,
  SERVER_PORT,
  isDevelopment,
  PROJECT_PATH,
  PROJECT_NAME,
  imageInlineSizeLimit,
  shouldAnalyze,
  ANALYZE_HOST,
  ANALYZE_PORT,
};
