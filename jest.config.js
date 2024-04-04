const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  collectCoverage: true, // Enable coverage collection
  coverageDirectory: "<rootDir>/coverage", // Directory where coverage reports will be stored
  coverageReporters: ["text", "lcov"], // Choose the coverage reporters (text for console output, lcov for file output)
  // Add any other coverage-related options as needed
};
module.exports = createJestConfig(customJestConfig);
