# 工程能力说明

## git 提交消息生成

### 依赖

```
commitizen
cz-customizable
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
"husky": "4.3.8"

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
@commitlint/cli
@commitlint/config-conventional
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
lint-staged
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
