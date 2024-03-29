module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest": true
  },
  ignorePatterns: [
    `.storybook/*`,
    `build/*`,
    `node_modules/*`,
    `public/*`,
    `cypress/*`,
    `*.d.ts`,
    `*.spec.(js | ts)`,
    `tailwind.config.ts`
  ],
  "extends": [ `eslint:recommended`, `plugin:react/recommended`, `plugin:import/errors`, `plugin:@typescript-eslint/recommended` ],
  "globals": {
    "$": true
  },
  "parser": `@typescript-eslint/parser`,
  "parserOptions": {
    "ecmaVersion": 2017,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": `module`,
    "allowImportExportEverywhere": true
  },
  "overrides": [
    {
      "files": [ `*.js`, `*.jsx` ],
      "rules": {
        "@typescript-eslint/explicit-module-boundary-types": `off`
      }
    }
  ],
  "plugins": [
    `react`,
    `import`,
    `@typescript-eslint`
  ],
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [
        `.ts`,
        `.tsx`
      ]
    },
    "import/resolver": {
      "node": {
        "moduleDirectory": [ `node_modules`, `./` ],
        "extensions": [ `.js`, `.jsx`, `.ts`, `.tsx`, `.d.ts`, `.stories.ts` ]
      }
    },
    "react": {
      "createClass": `createClass`,
      "pragma": `React`,
      "version": `16.8.6`
    }
  },
  "rules": {
    "indent": [ `error`, 2 ],
    "react/jsx-closing-bracket-location": [ 1, `line-aligned` ],
    "import/namespace": [ 2, {
      allowComputed: true
    }],
    "import/no-unresolved": [ 2, {
      ignore: [ `redux-observer` ]
    }],
    "no-trailing-spaces": `error`,
    "no-console": [
      `warn`,
      {
        "allow": [
          `warn`,
          `error`
        ]
      }
    ],
    "jsx-quotes": [
      `error`,
      `prefer-double`
    ],
    "quotes": [
      `error`,
      `backtick`,
      {
        "avoidEscape": true
      }
    ],
    "semi": [
      `error`,
      `never`
    ],
    "default-case": `error`,
    "dot-notation": [
      `error`,
      {
        "allowKeywords": true
      }
    ],
    "no-empty-function": `error`,
    "no-eval": `error`,
    "no-extra-bind": `error`,
    "no-lone-blocks": `error`,
    "no-implicit-coercion": `error`,
    "no-implied-eval": `error`,
    "no-multi-spaces": `error`,
    "no-script-url": `error`,
    "no-case-declarations": `error`,
    "no-unused-vars": [
      `error`,
      {
        "vars": `local`,
        "varsIgnorePattern": `^(React|e|i|it|expect)$`,
        "argsIgnorePattern": `^(props|error|reject|response|dispatch|getState|_.*)$`
      }
    ],
    "@typescript-eslint/no-unused-vars": [
      `error`,
      {
        "vars": `local`,
        "argsIgnorePattern": `_.*`
      }
    ],
    "no-useless-concat": `error`,
    "yoda": `error`,
    "array-bracket-spacing": [
      `error`,
      `always`,
      {
        "objectsInArrays": false
      }
    ],
    "block-spacing": [
      `error`,
      `always`
    ],
    "brace-style": [
      `error`,
      `1tbs`,
      {
        "allowSingleLine": true
      }
    ],
    "comma-dangle": [
      `error`,
      `never`
    ],
    "comma-spacing": [
      `error`,
      {
        "before": false,
        "after": true
      }
    ],
    "comma-style": [
      `error`,
      `last`
    ],
    "keyword-spacing": [
      `error`,
      {
        "before": true,
        "after": true
      }
    ],
    "newline-per-chained-call": [
      `error`,
      {
        "ignoreChainWithDepth": 2
      }
    ],
    "no-unneeded-ternary": `error`,
    "object-curly-newline": [
      `warn`,
      {
        "ObjectExpression": {
          "multiline": true,
          "minProperties": 1
        },
        "ObjectPattern": {
          "consistent": true
        }
      }
    ],
    "object-property-newline": `error`,
    "one-var": [
      `error`,
      {
        var: `never`,
        let: `never`,
        const: `never`
      }
    ],
    "prefer-destructuring": [
      `warn`,
      {
        "array": true,
        "object": true
      }
    ],
    "space-before-function-paren": [
      `error`,
      {
        "anonymous": `never`,
        "named": `never`
      }
    ],
    "space-in-parens": [
      `error`,
      `always`,
      {
        "exceptions": [
          `{}`
        ]
      }
    ],
    "spaced-comment": [
      `error`,
      `always`
    ],
    "wrap-regex": `error`,
    "arrow-spacing": `error`,
    "no-duplicate-imports": `error`,
    "no-var": `error`,
    /* R E A C T */
    "react/jsx-uses-vars": `error`,
    "react/prop-types": [
      1
    ],
    "react/no-direct-mutation-state": `error`,
    "react/no-find-dom-node": `warn`,
    "react/no-is-mounted": `error`,
    "react/no-render-return-value": `error`,
    "react/no-unknown-property": `error`,
    "react/react-in-jsx-scope": `off`,
    "react/require-render-return": `error`,
    "react/no-array-index-key": `warn`,
    "react/no-children-prop": `error`,
    "react/no-deprecated": `warn`,
    "react/no-unescaped-entities": `error`,
    "react/prefer-es6-class": [
      `error`, `always`
    ],
    /* J S X  S P E C I F I C */
    "react/jsx-uses-react": `error`,
    "react/jsx-boolean-value": `warn`,
    "react/jsx-curly-spacing": [
      `error`, `never`
    ],
    "react/jsx-equals-spacing": [
      `error`, `never`
    ],
    "react/jsx-first-prop-new-line": [
      `error`, `multiline`
    ],
    "react/jsx-max-props-per-line": [
      `warn`,
      {
        maximum: 3
      }
    ],
    "react/jsx-no-comment-textnodes": `error`,
    "react/jsx-no-duplicate-props": `error`,
    "react/jsx-no-literals": `error`,
    "react/jsx-no-undef": `error`,
    "react/jsx-pascal-case": `error`,
    "react/jsx-tag-spacing": [
      `error`,
      {
        "closingSlash": `never`,
        "beforeSelfClosing": `always`,
        "afterOpening": `never`
      }
    ]
  }
}
