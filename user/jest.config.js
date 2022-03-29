// jest.config.js
const { defaults: tsjPreset } = require('ts-jest/presets')

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!@react-native|react-native)'
  ],
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  moduleNameMapper: {
    '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
}
