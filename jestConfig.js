module.exports = {
  moduleNameMapper: {
    "\\.(css)$": 'identity-obj-proxy',
  },
  transform: {
    "\\.(png|jpg|gif)$": '<rootDir>/app/__mocks__/fileTransformer.js',
    "\\.(js|jsx)$": 'babel-jest',
  },
  moduleDirectories: ["node_modules", "app"],
  setupTestFrameworkScriptFile: '<rootDir>/setupEnzyme.js',
}
