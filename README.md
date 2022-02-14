# 工程能力说明

## git 提交消息生成

### 依赖

```
    "commitizen": "^4.2.4",
   "cz-customizable": "^6.3.0",
```

### 文档

https://github.com/commitizen/cz-cli

### 配置文件

```
.cz-config.js
.czrc
```

### TODO

结合 JIRA，自动生产消息

## git 生命周期钩子

### 依赖

husky

### 文档

https://github.com/typicode/husky
"husky": "4.3.8",

### 配置文件

package.json

```
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint --config commitlint.config.js -E HUSKY_GIT_PARAMS"
    }
  },

```

## git 提交消息校验

### 依赖

```
    "@commitlint/cli": "^16.1.0",
    "@commitlint/config-conventional": "^16.0.0",
```

### 配置文件

```
commitlint.config.js
package.json
"commit-msg": "commitlint --config commitlint.config.js -E HUSKY_GIT_PARAMS"

```

### 文档

https://commitlint.js.org/

## git 代码提交检查

### 依赖

```
    "lint-staged": "^12.3.3",
```

### 配置文件

```
package.json
  "lint-staged": {
    "*.{ts,tsx,js}": [
      "eslint"
    ],
    "*.{ts,tsx,js,json,html,yml,css,less,scss,md}": [
      "prettier --write"
    ]
  }

```

### 文档

https://github.com/okonet/lint-staged#readme

## typescript

### 依赖

```
    "tsconfig-paths-webpack-plugin": "^3.5.2"
    "@typescript-eslint/eslint-plugin": "^5.10.2",
    "@typescript-eslint/parser": "^5.10.2",
    "typescript": "^4.5.5",

```

## webpack 功能列表

### loader 相关

#### babel-loader

解析 ts 和 js
相关依赖

```
    "@babel/cli": "^7.17.0",
    "@babel/core": "^7.17.0",
    "@babel/plugin-transform-runtime": "^7.17.0",
    "@babel/preset-env": "^7.16.11",
    "@babel/preset-react": "^7.16.7",
    "@babel/preset-typescript": "^7.16.7",
    "babel-loader": "^8.2.3",
    "@babel/runtime-corejs3": "^7.17.2",
```

#### css-loader

解析 css
相关依赖

```
    "css-loader": "^6.6.0",
    "css-minimizer-webpack-plugin": "^3.4.1",
    "mini-css-extract-plugin": "^2.5.3",
    "postcss-flexbugs-fixes": "^5.0.2",
    "postcss-loader": "^6.2.1",
    "postcss-normalize": "^10.0.1",
    "postcss-preset-env": "^7.3.2",
    "style-loader": "^3.3.1",
```

#### thread-loader

开启 webpack
多线程
相关依赖

```
    "thread-loader": "^3.0.4",

```

### 插件

#### clean-webpack-plugin

每次打包前清空目标文件夹

#### css-minimizer-webpack-plugin

从 js 中分离 css

#### error-overlay-webpack-plugin

在页面上显示编译错误

#### copy-webpack-plugin

复制资源文件到目标文件夹

#### eslint-webpack-plugin

在编译过程中根据 eslint 检查代码

#### html-webpack-plugin

自动成功 HTML 并引入资源文件

#### mini-css-extract-plugin

因为从 js 分离出去后，css 不会压缩，需要插件来压缩资源

#### terser-webpack-plugin

压缩 js

#### webpack-bundle-analyzer

构建包大小分析

#### webpackbar

构建进度展示

## TODO

1. es-build
