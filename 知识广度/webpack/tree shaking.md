tree shaking 是基于静态模块的，es6模块加载就是静态的，所以可以根据整个依赖树静态的推导解析语法书
- 标注代码使用情况：harmony export / unused export;harmony import
- unused 的代码进行删除

摇树用ES6编写代码才生效 & 工具函数尽量单独输出，避免打包对象和类为使用的部分，增加包的大小