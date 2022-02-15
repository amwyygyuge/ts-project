const path = require("path");
const baseConfig = require("./jestConfig/jest-base.config");

module.exports = {
  ...baseConfig,
  projects: [
    {
      ...baseConfig,
      displayName: {
        name: "NODE",
        color: "red",
      },
      testMatch: [
        path.normalize(`**/__test?(s)__/**/*.test.(j|t)s?(x)`),
        path.normalize(`**/__test?(s)__/**/*.test.node.(j|t)s?(x)`),
      ],
      setupFiles: ["<rootDir>/jestConfig/setup/node/polyfills.js"],
      setupFilesAfterEnv: ["<rootDir>/jestConfig/setup/node/setupTest.js"],
      testEnvironment: "node",
    },
    {
      ...baseConfig,
      displayName: {
        name: "UT",
        color: "blue",
      },
      testMatch: [path.normalize(`**/__test?(s)__/**/*.test.view.(j|t)s?(x)`)],
      setupFiles: ["<rootDir>/jestConfig/setup/view/polyfills.js"],
      setupFilesAfterEnv: ["<rootDir>/jestConfig/setup/view/setupTest.js"],
      testEnvironment: "jest-environment-jsdom",
    },
  ],
};
