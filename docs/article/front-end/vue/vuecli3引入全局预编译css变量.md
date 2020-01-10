# vuecli3引入全局预编译css变量

## 安装`style-resources-loader`
- 这里不能使用`npm install style-resources-loader`的方式，需要使用`vue add style-resources-loader`进行安装，输入命令后会让你进行选择。
- 选择完之后会自动在`vue.config.js`中自动生成引入代码
- 引入的代码是直接使用的绝对路径，当然你可以使用更简便的方法，比如`path`插件  

代码：
``` js
pluginOptions: {
  'style-resources-loader': {
    preProcessor: 'less',
    patterns: [
      path.resolve(__dirname, './src/less/index.less')
    ]
  }
}
```