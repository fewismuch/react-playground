module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    "max-lines-per-function": ["error", { max: 500 }],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off", //关闭any类型警告
    "import/prefer-default-export": "off",
    "@typescript-eslint/naming-convention": "off",
    "import/no-extraneous-dependencies": "off",
    "no-empty": 0,
    "react-hooks/exhaustive-deps": 0,
    "import/extensions": 0,
    "import/no-default-export": "off",
    'react/jsx-no-target-blank':0
  },
};
