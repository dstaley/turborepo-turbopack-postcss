module.exports = {
  plugins: [
    [
      "@csstools/postcss-global-data",
      {
        files: ["node_modules://@localhostonly/global-styles/custom-media.css"],
      },
    ],
    [
      "postcss-preset-env",
      {
        stage: 2,
        browsers: ["defaults"],
        autoprefixer: { flexbox: "no-2009" },
        features: {
          "nesting-rules": true,
          "custom-media-queries": true,
          "custom-properties": false,
        },
      },
    ],
  ],
};
