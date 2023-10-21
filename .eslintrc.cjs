module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    "standard",
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    "max-lines-per-function": ["error", {max: 500}],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off", //关闭any类型警告
    "import/prefer-default-export": "off",
    "@typescript-eslint/naming-convention": "off",
    "import/no-extraneous-dependencies": "off",
    "no-empty": 0,
    "react-hooks/exhaustive-deps": 0,
    "import/extensions": 0,
    "import/no-default-export": "off",
    'react/jsx-no-target-blank': 0,
    // 方法后跟一个空格
    "space-before-function-paren": 0,

    // ?
    'multiline-ternary': 0,
    'import/order': [
      'error',
      {
        // 对导入模块进行分组
        "groups": [
          "builtin",
          "external",
          ["internal", "parent", "sibling", "index"],
          ["type", "unknown"],
        ],
        pathGroups: [
          {
            pattern: './*.less',
            group: 'index',
            position: 'after',
          },
          {
            pattern: './*.css',
            group: 'index',
            position: 'after',
          },
        ],
        // 不同组之间是否进行换行
        'newlines-between': 'always',
        // 根据字母顺序对每个组内的顺序进行排序
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]

  },
};
