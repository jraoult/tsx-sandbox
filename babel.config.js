module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: ["last 1 chrome versions"],
      },
    ],
    ["@babel/preset-typescript"],
    "@babel/preset-react",
  ],
  plugins: [
    // We force this plugin since for webpack 4's acorn can not parse optional
    // chaining but "last 1 chrome versions" would let it go through
    // cf. https://github.com/webpack/webpack/issues/10227
    ["@babel/plugin-proposal-optional-chaining"],
    ["@babel/plugin-proposal-nullish-coalescing-operator"],
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
  ],
};
