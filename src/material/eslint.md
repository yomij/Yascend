## ESLINT

### 1. 基本信息

   + ESLint 使用 [Espree](https://github.com/eslint/espree) 解析 JavaScript。

   + ESLint 使用 [AST](https://blog.csdn.net/weixin_39408343/article/details/95984062) 去分析代码中的模式

   + ESLint 是完全插件化的。每一个规则都是一个插件并且你可以在运行时添加更多的规则。

### 2. use

   ```javascript
   npm i eslint -global
   
   eslint  --init
   ```

可使用文件类型：

- **JavaScript** - 使用 `.eslintrc.js` 然后输出一个配置对象。需要使用`module.exports = {}`
- **YAML** - 使用 `.eslintrc.yaml` 或 `.eslintrc.yml` 去定义配置的结构。
- **JSON** - 使用 `.eslintrc.json` 去定义配置的结构，ESLint 的 JSON 文件允许 JavaScript 风格的注释。
- **(弃用)** - 使用 `.eslintrc`，可以使 JSON 也可以是 YAML。
- **package.json** - 在 `package.json` 里创建一个 `eslintConfig`属性，在那里定义你的配置。

如果同一个目录下有多个配置文件，ESLint 只会使用一个。优先级顺序如下：

1. `.eslintrc.js`
2. `.eslintrc.yaml`
3. `.eslintrc.yml`
4. `.eslintrc.json`
5. `.eslintrc`
6. `package.json`

 默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。 

 另外，你可以配置`.eslintignore`文件选择忽略某些文件和目录。

### 3. 配置项(常用)

   1. parser --> 解析器, 可用项:
      > +  [Espree](https://github.com/eslint/espree)，默认
      > +  [Esprima](https://www.npmjs.com/package/esprima)
      > +  [Babel-ESLint](https://www.npmjs.com/package/babel-eslint) - 一个对[Babel](https://babeljs.io/)解析器的包装，使其能够与 ESLint 兼容。 
      > +  [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) - 将 TypeScript 转换成与 estree 兼容的形式，以便在ESLint中使用 

   2. env -->  一个环境定义了一组预定义的全局变量, 常用[可用项](https://eslint.bootcss.com/docs/user-guide/configuring#specifying-environments)：

      > + `browser` - 浏览器环境中的全局变量。
      > + `node` - Node.js 全局变量和 Node.js 作用域。
      > +  `mongo` - MongoDB 全局变量。 
      > +  `es6` - 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 `ecmaVersion` 解析器选项为 6）。 
      > +  `commonjs` - CommonJS 全局变量和 CommonJS 作用域 (用于 Browserify/WebPack 打包的只在浏览器中运行的代码)。 
      > +  `amd` - 将 `require()` 和 `define()` 定义为像 [amd](https://github.com/amdjs/amdjs-api/wiki/AMD) 一样的全局变量。 
    
      ```javascript
      // 配置方式
      {
          "env": {
              "browser": true,
              "node": true
          }
      }
      ```

   3.  globals, 当在一个源文件中使用未定义的变量时， [no-undef](https://eslint.bootcss.com/docs/rules/no-undef) 规则将发出警告，可通过globals中定义全局变量或在源代码中使用注释定义：

      ```javascript
      // 注释方式 writable-可写， readonly-只读
      
      /* global var1:writable, var2:writable */
      ```
      
      ```javascript
      // 配置方式
      {
          "globals": {
              "var1": "writable",
              "var2": "readonly"
          }
      }
      ```

   4. plugins，用以实现额外的校验功能，npm安装后配置：

      ```javascript
      {
          "plugins": [
              "plugin1", // 等同于eslint-plugin-plugin2， eslint-plugin-可省略
              "eslint-plugin-plugin2"
          ]
      }
      ```
      
      开发插件？这里有个简单[例子](https://www.jianshu.com/p/e6ee3f64e2ce)，开发文档详见[这里](https://eslint.bootcss.com/docs/developer-guide/working-with-plugins)。

   5.  rules，校验规则

      1. ESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用的规则。要改变一个规则设置，你必须将规则 ID 设置为下列值之一：
         + `"off"` 或 `0` - 关闭规则
         + `"warn"` 或 `1` - 开启规则，使用警告级别的错误：`warn` (不会导致程序退出)
         + `"error"` 或 `2` - 开启规则，使用错误级别的错误：`error` (当被触发的时候，程序会退出)
      
      ```javascript
      // 配置方式
      {
          "rules": {
              "eqeqeq": "off",
              "curly": "error",
              "quotes": ["error", "double"]
          }
      }
      ```
      
      ```js
      // 注释方式
      /* eslint quotes: ["error", "double"], curly: 2 */
      ```
      
      2. 临时禁止eslint报错
      
         ```
         // 放置顶部则禁用整个文件
         /* eslint-disable */ 
         
         // 指定规则禁用
         /* eslint-disable no-alert, no-console */
         
         // 莫一行禁用
         /* eslint-disable-next-line */
         ```
      
      3. 禁用一组文件的配置文件中的规则
      
         *可以使用overrides配置项，配合files参数*
      
         ```
         {
           "rules": {...},
           "overrides": [
             {
               "files": ["*-test.js","*.spec.js"],
               "rules": {
                 "no-unused-expressions": "off"
               }
             }
           ]
         }
         ```
         
      4. 全部rules配置项，可以查看[这里](https://eslint.bootcss.com/docs/rules/)
      
   6. extends，继承规则

         1. 属性值可以是：
            + 指定配置的字符串(配置文件的路径、可共享配置的名称、`eslint:recommended` 或 `eslint:all`（启用当前安装的eslint所有核心规则，会随版本变更）)
            + 字符串数组：每个配置继承它前面的配置
         2. rules属性变更继承规则：
            +  可以启用额外的规则
            +  可以改变继承的规则级别而不改变它的选项 , 如 error -> warm
            +  可以覆盖基础配置中的规则的选项，如：  `["error", "single", "avoid-escape"]`  ->  `["error", "single"]`
         3. 继承插件的规则, 值： plugin: [ 包名 (省略了前缀，比如，react) ]/[ 配置名称 ], 如：`plugin:react/recommended`

   7.  overrides， 可以进行更精细的配置，如，为一个目录下的不同文件配置不同的规则

      ​	*除了root属性外，其他有效配置选项都被允许*

      ```javascript
      // 例子
      {
        "rules": {
          "quotes": ["error", "double"]
        },
      
        "overrides": [
          {
            "files": ["bin/*.js", "lib/*.js"],
            "excludedFiles": "*.test.js",
            "rules": {
              "quotes": ["error", "single"]
            }
          }
        ]
      }
      ```

### 4.简单配置

1. ts配置

   ```javascript
   // .eslintrc.js
   module.exports = {
     "extends": ["airbnb-base", "plugin:@typescript-eslint/recommended"],
     "parser": "@typescript-eslint/parser",
     "plugins": ["@typescript-eslint"],
     "env": {
       "browser": true
     },
     "rules": {
       "no-console": "off",
       "@typescript-eslint/indent": ["error", 2],
       "@typescript-eslint/no-var-requires": "off",
       "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
     }
   };
   ```

2. vue配置

   ```javascript
   // .eslintrc.js
   module.exports = {
     'root': true,
     'env': {
       'browser': true,
     },
     'extends': [
       'plugin:vue/essential',
       '@vue/standard',
     ],
     'rules': {
       'space-before-function-paren': 0,
       'indent': 'off',
       'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
       'avoidEscape': true,
       'quotes': ['error', 'single', { 'avoidEscape': true }],
       'comma-dangle': ['error', 'always-multiline'],
       'block-spacing': ['error', 'always'],
       'array-bracket-spacing': ['error', 'always', { 'objectsInArrays': false }]
     },
     'parserOptions': {
       'parser': 'babel-eslint'
     },
   }
   ```

   

