Vue-router懒加载
- 为了解决SPA打包内容过大做的优化，以达到**按需加载**的目的。主要用到了Vue的[异步组件](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6)和Webpack的代码分割
- Vue 异步组件
- Webpack 代码分割
    - 代码分割动态模块引入有两种方法：[import()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import) 语法和 require.ensure(被import取代)
        - import() 实际上返回了一个 Promise 对象
        - 可以在 import() 的魔法注释来为chunk指定名字和prefetch等等

