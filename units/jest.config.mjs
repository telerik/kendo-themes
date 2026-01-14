export default {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "mjs", "ts", "tsx"],
  extensionsToTreatAsEsm: [".ts"],
  // reporters: ["./specificity-reporter.mjs"], // Uncomment to enable specificity reporter
  transform: {
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
    "^.+\\.(js|mjs)$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  transformIgnorePatterns: [
    "/node_modules/",
  ],
  testMatch: ["**/*.test.js", "**/*.test.ts"],
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
};
