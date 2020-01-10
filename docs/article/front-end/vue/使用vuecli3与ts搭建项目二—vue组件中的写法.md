# 使用vuecli3与ts搭建项目—vue组件中的写法(二)

## 前言
vuecli脚手架创建的vue js 还是 vue ts模板以及css写法都是一致的，只是在script中写法不太一致，首先在标签上增加了语言类型`<script lang="ts"></script>`。  
接下来就讲讲vue ts在项目中的使用。具体的可以看官网文档[Vue.js and Property Decorator](https://github.com/kaorun343/vue-property-decorator)

## 引入Vue对象
在vscode中，使用快速创建输入`ts`就可以快速创建然后生成模板
``` ts
import Vue from 'vue'
export default Vue.extend({
  // todo
})
// 当然还有另外一种写法，这种写法也是我常用的写法，看个人喜好
/*
import { Vue, Component } from 'vue-property-decorator';
export default class Main extends Vue {
  // todo 
}
*/
```