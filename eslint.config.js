const globals = require("globals");
const eslint = require("@eslint/js");
const tseslint = require('typescript-eslint');

module.exports = [
    eslint.configs.recommended,
    {
        ignores: [
            "**/node_modules",
            "**/dist",
            ".nx",
            ".tmp"
        ],
    },
    {
        name: "root",
        files: [ "**/*.js", "**/*.mjs" ],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            ecmaVersion: "latest",
            sourceType: "module",
        },
        rules: {
            "block-scoped-var": "error",
            "consistent-return": "error",
            "curly": "error",
            "default-case": "error",
            "eqeqeq": ["error", "smart"],
            "no-alert": "error",
            "no-caller": "error",
            "no-console": "error",
            "no-else-return": "error",
            "no-eval": "error",
            "no-implied-eval": "error",
            "no-extend-native": "error",
            "no-extra-bind": "error",
            "no-implicit-coercion": "error",
            "no-invalid-this": "error",
            "no-lone-blocks": "error",
            "no-loop-func": "error",
            "no-new": "error",
            "no-param-reassign": "error",
            "no-return-assign": "error",
            "no-sequences": "error",
            "no-useless-call": "error",
            "camelcase": "error",
            "consistent-this": ["error", "that"],
            "max-params": ["error", 4],
            "no-nested-ternary": "error",
            "arrow-body-style": "error",
            "no-var": "error"
        }
    },
    {
        name: "html-components",
        files: [
            "packages/html/**/*.ts",
            "packages/html/**/*.tsx"
        ],
        plugins: {
            "@typescript-eslint": tseslint.plugin
        },
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            globals: {
                ...globals.browser,
                ...globals.node,
                React: true
            }
        },
        rules: {
            ...tseslint.configs.recommended.rules,
            ...tseslint.configs.stylistic.rules,
            "@typescript-eslint/no-empty-function": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-non-null-assertion": "off",
            "@typescript-eslint/no-unused-vars": ["error", {"varsIgnorePattern": "^_"}],
            "no-unused-vars": "off",
            "no-undef": 'off'
        }
    }
]
