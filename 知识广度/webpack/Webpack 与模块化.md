webpack 是如何处理模块化的：https://github.com/happylindz/blog/issues/6

webpack 3：
- 打包结果是一个立即执行函数，入参数组格式，数组中是被包裹在function中的各个模块
- 立即执行函数做的几个事情
    - 拥有一个installedModules： 用于存储已安装模块
    - ___webpack_require__： 
        - 入参是moduleid ，也就是模块在数组中的索引
        - 看已安装模块中有没有，有就返回已缓存的模块的export；
        - 没有就创建新的module并放入installedModules，接着执行module函数（每个module有个l的标志，用于标识当前模块是否已经被加载），最后返回module.exports
    - 
- 包裹模块的函数有几个入参
    - module
    - exports
    - __webpack_require__： 没有其他依赖就不传了
    - 