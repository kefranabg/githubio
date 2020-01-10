# 使用vuecli3与ts搭建项目—创建(一)

## 前言
TypeScript的设计目的应该是解决JavaScript的“痛点”：弱类型和没有命名空间，导致很难模块化，不适合开发大型程序。各大框架都开始支持TypeScript，而谷歌和微软又更加积极。  
这里主要讲项目初始化的一些东西，以及一些准备，比如增加reset css、tslint规范配置、axios的封装、删除不必要的文件以及增加vue.config.js的配置。


## package.json可选配置
个人常用 -o 浏览器打开和使用局域网 --host 192.168.x.x
#### vue-cli-service serve
```
用法：vue-cli-service serve [options] [entry]

选项：

  --open    在服务器启动时打开浏览器
  --copy    在服务器启动时将 URL 复制到剪切版
  --mode    指定环境模式 (默认值：development)
  --host    指定 host (默认值：0.0.0.0)
  --port    指定 port (默认值：8080)
  --https   使用 https (默认值：false)
```
#### vue-cli-service build
```
用法：vue-cli-service build [options] [entry|pattern]

选项：

  --mode        指定环境模式 (默认值：production)
  --dest        指定输出目录 (默认值：dist)
  --modern      面向现代浏览器带自动回退地构建应用
  --target      app | lib | wc | wc-async (默认值：app)
  --name        库或 Web Components 模式下的名字 (默认值：package.json 中的 "name" 字段或入口文件名)
  --no-clean    在构建项目之前不清除目标目录
  --report      生成 report.html 以帮助分析包内容
  --report-json 生成 report.json 以帮助分析包内容
  --watch       监听文件变化
```

## 项目环境的配置
在项目目录下使用下面的文件配置就对环境的配置，开发环境: `.env.development`，生产环境：`.env.production`
```
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
```
一个环境文件只包含环境变量的`“键=值”`对：
```
VUE_APP_BASEURL="https://production/api"
NODE_ENV="production"
```

## 默认样式重置
[点这里](../css/)


## tslint规范
下面是我常用的tslint，这里是[腾讯AlloyTeam配置文档](https://github.com/AlloyTeam/tslint-config-alloy/blob/master/index.js)
``` json
"indent": [true, "spaces", 2],
"interface-name": false,
"no-consecutive-blank-lines": false,
"object-literal-sort-keys": false,
"ordered-imports": false,
"quotemark": [true, "single"],
"semicolon": [true, "always"],
"space-within-parens": [true, 0],
"no-console": false,
"prefer-for-of": true,
"no-trailing-whitespace": false,
"no-var-keyword": true,
"triple-equals": true,
"no-empty": [true, "allow-empty-catch"],
"no-for-in-array": true,
"no-parameter-reassignment": true,
"no-duplicate-variable": [true, "check-parameters"],
"space-before-function-paren": [true, "asyncArrow"],
"trailing-comma": [true, {"multiline": "never", "singleline": "never" }],
"no-implicit-dependencies":[true, ["@", "src"]],
"arrow-parens": false,
"no-eval": false
```

## axios的简易封装
``` ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Message } from 'view-design';

const service: AxiosInstance = axios.create({
  timeout: 7000,
  baseURL: process.env.VUE_APP_BASEURL
});

service.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
}, error => {
  Promise.reject(error);
});

service.interceptors.response.use((response: AxiosResponse) =>  {
  const {status, data} = response;
  if (status === 200) {
    if (!data || data.code !== 200) {
      if (data.msg) {
        (Message as any).error(data.msg);
      } else {
        (Message as any).error(`数据获取失败:${data.code}`);
      }
      return data;
    }
    return data;
  } else {
    (Message as any).error(`状态返回:${status}`);
  }
}, (error: any) => {
  if (error.message) {
    (Message as any).error(`${error.message}网络或服务异常`);
  }
  return error;
});

export default service;
```

## vue.config.ts

``` ts
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }))
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'product') {
    } else {
    }
  },
  pages: {
    index: {
      entry: 'src/main.ts',
      filename: 'index.html',
      title: '首页',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'dist',
  filenameHashing: false,
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    host: 'localhost', // 也可以直接写IP地址这样方便真机测试
    port: 8081, // 端口号
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    proxy: {
      '/api': {
        target: '<url>', // 写地址
        ws: true, // 允许跨域
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          '^/api': ''
        }
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/less/index.less')
      ]
    }
  }
}
```

## 个人常用moudle css
``` css
/* flex */
.flex{display: flex;}
.flex1{flex: 1;}
.flex-center{display: flex;justify-content: center;align-items: center;}
.flex-left{display: flex;justify-content: center;align-items: flex-start;}
.flex-right{display: flex;justify-content: center;align-items: flex-end;}
.flex-items{display: flex;align-items: center;}
.flex-between{display: flex;justify-content: space-between;align-items: center;}

/* ellips */
.hidden{overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}

/* clear */
.cls::after{content: '';clear: both;display: block;font-size: 0;visibility: hidden;width: 0;height: 0;}

/* scroll */
::-webkit-scrollbar{width: 8px;height: 8px;}
::-webkit-scrollbar-track{-webkit-box-shadow: inset 0 0 6px rgba(141, 141, 141, 0.1);background-color: #F5F5F5;}
::-webkit-scrollbar-thumb{background-color: #bbb;}
```