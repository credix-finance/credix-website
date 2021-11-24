module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "import-quotes", "react-hooks", "react"],
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parserOptions: {
        project: "tsconfig.json",
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true // Allows for the parsing of JSX
        }
    },
    rules: {
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/interface-name-prefix": [0, { "prefixWithI": "always" }],
        "@typescript-eslint/no-use-before-define": ["error", { "functions": false }],
        "@typescript-eslint/explicit-function-return-type": "off",
        "quotes": ["error", "single"],
        "jsx-quotes": ["error", "prefer-double"],
        "indent": ["error", 2],
        "object-curly-spacing": ["error", "always"],
        "import-quotes/import-quotes": [1, "single"],
        "keyword-spacing": ["warn", { "before": true }],
        "space-before-blocks": "warn",
        "no-multi-spaces": "warn",
        "no-trailing-spaces": "warn",
        "max-len": ["warn", { "code": 220, "tabWidth": 4 }],
        "comma-dangle": ["warn", "never"],
        "semi-spacing": "warn",
        "arrow-spacing": "warn",
        "generator-star-spacing": ["warn", { "before": false, "after": true }],
        "space-before-function-paren": ["warn", "never"],
        "space-in-parens": ["warn", "never"],
        "react/jsx-curly-spacing": [1, "never"],
        "react/jsx-equals-spacing": [1, "never"],
        "react/jsx-props-no-multi-spaces": "warn",
        "react/jsx-tag-spacing": [1, {
            "closingSlash": "never",
            "beforeSelfClosing": "never",
            "afterOpening": "never",
            "beforeClosing": "never"
        }],
        "react/jsx-space-before-closing": [1, "never"]
    }
};
