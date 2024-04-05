import type { Config } from "jest";

const config: Config = {
  coverageDirectory: "build/reports/front-coverage",
  reporters: [
    "default",
    ["jest-junit", { outputDirectory: "build/reports/front-tests", outputName: "jest-junit.xml" }]
  ]
};

export default config;
