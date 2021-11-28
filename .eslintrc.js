//https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "unicorn"
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "eslint-config-prettier"
  ],
  rules: {
    "unicorn/filename-case": [
      "error",
      {
        "cases": {
          "camelCase": true
        }
      }

    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "variable",
        "format": ["camelCase"]
      },
      {
        "selector": "typeLike",
        "format": ["PascalCase"]
      }
    ],
    "@typescript-eslint/quotes": [
      "error",
      "double"
    ],
    "@typescript-eslint/explicit-module-boundary-types": ["error"],
    "@typescript-eslint/ban-ts-comment": ["warn"],
    "@typescript-eslint/ban-types": [
      "error",
      {
        "types": {
          "Boolean": {
            "message": "Use boolean ",
            "fixWith": "boolean"
          },
          "String": {
            "message": "Use string",
            "fixWith": "string"
          },
          "{}": {
            "message": "Use object instead",
            "fixWith": "object"
          }
        }
      }
    ],
    "@typescript-eslint/explicit-member-accessibility": ["error"],
    "@typescript-eslint/method-signature-style": ["error", "method"],
    "@typescript-eslint/no-confusing-void-expression": [
      "error",
      { "ignoreArrowShorthand": true }
    ]
  }
};
