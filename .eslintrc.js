module.exports = {
  root: true,
  extends: [
    "@react-native",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "import", "prettier", "jsx-a11y"],
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  rules: {

    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    "@typescript-eslint/consistent-type-imports": "error",
    "react/function-component-definition": "off",
    "react/style-prop-object": "warn",
    "consistent-return": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }, { usePrettierrc: true }],
    "react/no-unstable-nested-components": [
      "error",
      {
        allowAsProps: true,
      },
    ],
    "import/order": [
      "warn",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
        },
        groups: ["builtin", "external", "index", "sibling", "parent", "internal", "type"],
        pathGroups: [
          {
            pattern: "@(react|react-native)",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["types"],
        "newlines-between": "always",
      },
    ],
    "@typescript-eslint/no-use-before-define": ["error", { "functions": true, "classes": true, "variables": false }], // disable the rule for variables, but 
  },
};
