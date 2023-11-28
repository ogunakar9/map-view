const esModules = [
  "@react-leaflet",
  "react-leaflet",
  "@types/leaflet",
  "leaflet",
  "leaflet-defaulticon-compatibility",
].join("|");
module.exports = {
  moduleNameMapper: {
    // Resolve .css and similar files to identity-obj-proxy instead.
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    // Resolve .jpg and similar files to __mocks__/file-mock.js
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/file-mock.js",
  },

  clearMocks: true,

  coverageDirectory: "coverage",
  // In jest.config.js add (if you haven't already)
  setupFilesAfterEnv: ["./src/setupTests.js"],

  coverageProvider: "v8",

  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },

  rootDir: ".",
  moduleDirectories: ["node_modules", "src", "utils"],
  testEnvironment: "jsdom",
  testTimeout: 20000,

  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.js?$": "babel-jest",
    "^.+\\.(t|j)sx?$": ["@swc/jest"],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
};
