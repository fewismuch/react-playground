module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    "standard",
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    "plugin:prettier/recommended",
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'react/react-in-jsx-scope': 'off',  // 允许在 JSX 文件中省略 React 的引入，因为有些环境会自动引入 React
    "max-lines-per-function": ["error", {max: 500}],  // 设置单个函数的最大行数为500行，超过则报错
    "@typescript-eslint/ban-ts-comment": "off",  // 允许使用@ts-ignore来忽略 TypeScript 的类型检查
    "@typescript-eslint/no-explicit-any": "off",  // 允许使用 any 类型
    "import/prefer-default-export": "off",  // 允许文件中不必导出默认值
    //"@typescript-eslint/naming-convention": "off",  // 关闭对命名规范的检查
    "import/no-extraneous-dependencies": "off",  // 允许导入项目依赖的外部模块
    "no-empty": 0,  // 允许空的代码块
    //"react-hooks/exhaustive-deps": 0,  // 关闭对 React Hook 的依赖检查
    "import/extensions": 0,  // 关闭对导入文件扩展名的检查
    "import/no-default-export": "off",  // 允许默认导出
    'react/jsx-no-target-blank': 0,  // 允许在 JSX 中使用 target="_blank" 的链接
    //"space-before-function-paren": 0,  // 关闭函数名与括号之间的空格检查
    'multiline-ternary': 0,  // 允许多行的条件表达式
    "no-new": 0,  // 允许直接调用构造函数创建实例对象

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
