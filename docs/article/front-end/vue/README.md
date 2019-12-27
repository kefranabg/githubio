## @vue/cli的安装使用

### @vue/cli的介绍
::: warning 警告
这份文档是对应 @vue/cli。老版本的 vue-cli 文档请移步这里。
:::

::: warning 警告
关于旧版本

Vue CLI 的包名称由 vue-cli 改成了 @vue/cli。 如果你已经全局安装了旧版本的 vue-cli (1.x 或 2.x)，你需要先通过 npm uninstall vue-cli -g 或 yarn global remove vue-cli 卸载它。
:::

### @vue/cli的安装

``` sh
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

安装之后，你就可以在命令行中访问 vue 命令。你可以通过简单运行 vue，看看是否展示出了一份所有可用命令的帮助信息，来验证它是否安装成功。

你还可以用这个命令来检查其版本是否正确：

```
vue --version
```

### 快速原型开发

你可以使用 ```vue serve``` 和 ```vue build``` 命令对单个 ```*.vue``` 文件进行快速原型开发，不过这需要先额外安装一个全局的扩展：

``` sh
npm install -g @vue/cli-service-global
```
```vue serve``` 的缺点就是它需要安装全局依赖，这使得它在不同机器上的一致性不能得到保证。因此这只适用于快速原型开发。

#### vue serve
```
Usage: serve [options] [entry]

在开发环境模式下零配置为 .js 或 .vue 文件启动一个服务器


Options:

  -o, --open  打开浏览器
  -c, --copy  将本地 URL 复制到剪切板
  -h, --help  输出用法信息

这个指令的用法，在项目根目录找到package.json，scripts的serve下加上就可以
例：vue-cli-service serve -o
```
你所需要的仅仅是一个 App.vue 文件：

``` html
<template>
  <h1>Hello!</h1>
</template>
```
然后在这个 App.vue 文件所在的目录下运行：
```
vue serve
```
`vue serve` 使用了和 `vue create` 创建的项目相同的默认设置 (webpack、Babel、PostCSS 和 ESLint)。它会在当前目录自动推导入口文件——入口可以是 `main.js`、`index.js`、`App.vue` 或 `app.vue` 中的一个。你也可以显式地指定入口文件：
``` sh
vue serve MyComponent.vue
```
如果需要，你还可以提供一个 index.html、package.json、安装并使用本地依赖、甚至通过相应的配置文件配置 Babel、PostCSS 和 ESLint。

#### vue build
```
Usage: build [options] [entry]

在生产环境模式下零配置构建一个 .js 或 .vue 文件

Options:

  -t, --target <target>  构建目标 (app | lib | wc | wc-async, 默认值：app)
  -n, --name <name>      库的名字或 Web Components 组件的名字 (默认值：入口文件名)
  -d, --dest <dir>       输出目录 (默认值：dist)
  -h, --help             输出用法信息
```
你也可以使用 vue build 将目标文件构建成一个生产环境的包并用来部署：
```
vue build MyComponent.vue
```
`vue build` 也提供了将组件构建成为一个库或一个 Web Components 组件的能力。查阅[构建目标](https://cli.vuejs.org/zh/guide/build-targets.html)了解更多。

### 创建一个项目

#### vue create
```
vue create hello-world
```
你会被提示选取一个 preset。你可以选默认的包含了基本的 Babel + ESLint 设置的 preset，也可以选“手动选择特性”来选取需要的特性
``` sh
? Please pick a preset: (Use arrow keys) // 请选择预设:(使用箭头键)
> default (babel, eslint) // 默认值(babel, eslint)
  Manually select features // 手动选择功能
```
使用手动选择功能之后会有以下功能可供选择
```
? Please pick a preset: Manually select features
? Check the features needed for your project:
>( ) Babel // 语法转换
 ( ) TypeScript // 强类型的语言,可转换成js
 ( ) Progressive Web App (PWA) Support // 增强WEB应用,可不受网络影响
 ( ) Router // 路由管理
 ( ) Vuex // 状态储存
 ( ) CSS Pre-processors // 选择CSS 预处理类型
 ( ) Linter / Formatter // 选择Linter / Formatter规范类型
 ( ) Unit Testing // 测试方式
 ( ) E2E Testing // 测试方式
```
继续后续的选择
```
Use class-style component syntax? // 使用类风格的组件语法
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? // 使用Babel和TypeScript(现代模式需要，自动检测填充，置换JSX)
? Use history mode for router? (Requires proper server setup for index fallback in production) // 使用历史模式的路由器?(需要为生产环境中的索引备份进行适当的服务器设置)
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): // 选择一个CSS预处理程序(PostCSS, Autoprefixer和CSS模块默认支持):
  Sass/SCSS (with dart-sass)
  Sass/SCSS (with node-sass)
> Less
  Stylus  


? Pick a linter / formatter config: // 选择一个linter / formatter配置:
> TSLint // 使用的typescript,所以选择这个
  ESLint with error prevention only
  ESLint + Airbnb config
  ESLint + Standard config
  ESLint + Prettier 


? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection) // 选择额外的lint功能:(按选择，切换所有，反转选择)语法检测方式
>(*) Lint on save // 保存检测
 ( ) Lint and fix on commit // fix和commit的时候检测


? Pick a unit testing solution: (Use arrow keys) // 选择一个单元测试解决方案:(使用箭头键)
> Mocha + Chai
  Jest


? Pick a E2E testing solution: (Use arrow keys) // 选择一个E2E测试解决方案:(使用箭头键)
> Cypress (Chrome only)
  Nightwatch (Selenium-based)


? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? (Use arrow keys) // ?你喜欢把配置放在什么地方，比如Babel, PostCSS, ESLint等等?(用箭头键)
> In dedicated config files // 在专用配置文件中的>
  In package.json // 在package.json


? Save this as a preset for future projects? (y/N) // 把它作为未来项目的预置?(y / N) yes的话需要输入名字,n就开始下载依赖创建项目
```

创建完成之后可以使用以下命令进入项目并运行
```
 $ cd vueproject
 $ npm run serve
```

## 使用图形化界面
你也可以通过 vue ui 命令以图形化界面创建和管理项目：
```
vue ui
```
上述命令会打开一个浏览器窗口，并以图形化界面将你引导至项目创建的流程。