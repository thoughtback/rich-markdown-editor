// This config is only used for TS support in Storybook
module.exports = {
  sourceType: "unambiguous",
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: 100,
        },
      },
    ],
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
  plugins: [],
};
