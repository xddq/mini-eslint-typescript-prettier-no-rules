/* eslint-env node */
module.exports = {
  extends: [
    // NOTE: Here I simply want to disable all rules and enable them one by one
    // later. In case you want all "recommended" rules, simply uncomment the
    // next lines here and you are ready to go.
    // "eslint:recommended",
    // "plugin:@typescript-eslint/recommended",
    // "plugin:@typescript-eslint/recommended-requiring-type-checking",
    // Keep this pretter extends. It disables all formatting based rules of eslint. Enables
    // eslint to just work as linter and prettier work as formatter.
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  // This enables type checking for typescript files. Here we can simpl add each
  // eslint or typescript-eslint rule. Src for the overrides from here:
  // src: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.mts", "*.cts"],
      rules: {
        // sample typescript-eslint rule
        // https://typescript-eslint.io/rules/array-type
        "@typescript-eslint/array-type": "error",
        // sample eslint rule
        // src: https://eslint.org/docs/latest/rules/eqeqeq
        eqeqeq: ["error"],
      },
    },
  ],
  root: true,
};
