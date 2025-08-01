export default {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  moduleFileExtensions: ["js", "ts", "tsx"],
  extensionsToTreatAsEsm: [".ts"],
  reporters: ["./minimal-reporter.mjs"],
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
    "^.+\\.js$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  testMatch: ["**/*.test.js", "**/*.test.ts"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};
