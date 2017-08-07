# 问卷管理系统

### 目录
>我的问卷
>>新建问卷
>>查看问卷
>>编辑问卷
>>删除问卷

### vue
* 组件
  * 每个组件作为单独的文件（.vue）在components文件夹内
  * 引用某个组件import A from './A.vue'
  * 组件间通信
    * 子组件中:this.$emit('event',data)
    * 父组件中:<子组件 @event="handle"></子组件> handler(data){} components: {子组件}
* 路由
  * 路由配置在src/router/index.js中
  * import Vue from 'vue'
  * import Router from 'vue-router'
  * import A from '@/components/A.vue',@为自定义路径src
  * vue.use(Router)
  * export default new Router({routes: [{path: '/a', name: 'a', component: A}]})
