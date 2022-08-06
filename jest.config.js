module.exports = {
  preset: 'ts-jest',
  testEnvironment: "node",
  reporters: ["default"]
};

/*
# Add reporter when Jest Typescript issue has been resolved:
github issue: https://github.com/kulshekhar/ts-jest/issues/1811

module.exports = {
  preset: 'ts-jest',
  testEnvironment: "node",
  reporters: ["default", "./src/github-actions-reporter.ts"]
};
*/