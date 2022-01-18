var preset = require("jest-preset-angular/jest-preset");
module.exports = {
  ...preset,
  preset: "ts-jest",
  setupFilesAfterEnv: ["./setupJest.ts"],
  testMatch: ["**/*.spec.ts"],
  globals: {
    ...preset.globals,
    "ts-jest": {
      ...preset.globals["ts-jest"],
      tsConfig: "./tsconfig.spec.json",
      isolatedModules: true,
    },
  },
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  }
};