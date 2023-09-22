/** @type {import('jest').Config} */
module.exports = {
  testMatch: ["**/*.test.js", "**/*.test.ts", "**/*.test.jsx", "**/*.test.tsx"],
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  rootDir: "test",
};
