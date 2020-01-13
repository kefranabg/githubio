# 使用vuecli3与ts搭建项目—vue组件中的写法(二)

## 前言
vuecli脚手架创建的vue js 还是 vue ts模板以及css写法都是一致的，但是值得注意的是，在标签上增加了`<script lang="ts"></script>`ts声明，然后代码中导入 *.vue 文件的时候，需要写上 .vue 后缀，原因还是因为 TypeScript 默认只识别 .ts 文件，不识别 .vue 文件。  
> 在使用typescript前建议阅读中文文档[TypeScript 中文手册](https://typescript.bootcss.com/)
接下来就讲讲vue ts在项目中的使用。具体的可以看官网文档[Vue.js and Property Decorator](https://github.com/kaorun343/vue-property-decorator)
1. [vue-class-component](https://github.com/vuejs/vue-class-component)  
强化 Vue 组件，使用 TypeScript/装饰器 增强 Vue 组件
2. [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)  
在 vue-class-component 上增强更多的结合 Vue 特性的装饰器
3. [vuex-class](https://github.com/vuejs/vue-class-component)  
基于vue-class-component对Vuex提供的装饰器

## 引入Vue对象
在vscode中，使用快速创建输入`ts`就可以快速创建然后生成模板
``` ts
// 把原有的ts内容替换成下面
import { Vue, Component } from 'vue-property-decorator';
@Component({})
export default class Main extends Vue {
  // todo 
}
```
## 生命周期以及属性
生命周期与原来一致，属性具体可以看官方给的github文档[vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)。

## 组件引入@Component
``` ts
import { Vue, Component } from 'vue-property-decorator';
import { header } from '@/components/header.vue';
@Component({
  components: {
    header
  }
})
export default class Main extends Vue {
  // todo 
}
```

## data数据
``` ts
import { Vue, Component } from 'vue-property-decorator';

interface ObjType {
  b: number;
}

@Component({})
export default class Main extends Vue {
  // 具体类型查看 TypeScript 中文手册 https://typescript.bootcss.com/
  str1 = 'test';
  str2: string = 'test';
  private str3: string = 'test';
  private str4?: string; // ?: 指可选参数
  private str5!: string = 'test'; // !: 指必须要有值
}
```