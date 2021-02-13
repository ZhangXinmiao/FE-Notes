defer 与 async
直接使用script脚本的话，html会按照顺序来加载并执行脚本，在脚本加载&执行的过程中，会阻塞后续的DOM渲染。
- defer：(异步下载)渲染完再执行，告诉浏览器立即下载，但是延迟到页面解析完再执行。多个defer出现则按照出现顺序加载
- async：(异步执行)下载完就执行，没有任何依赖的或不依赖任何可以使用async。多个async则不能够保证加载顺序
es6模块允许内嵌在网页中：
- type=“module” 相当于在script标签上开启了defer
- export和import
- export default 则不需要在import的时候写大括号
- 编译时js引擎会静态分析，编译的时候就会引入模块代码
commonjs node.js
- module.exports 定义当前模块对外暴露的接口，require用于加载
- 同步加载模块
- 加载原理：require第一次加载脚本就会执行整个脚本某地内存中生成一个对象。对象描述了commonjs模块的id、exports（输出的接口）、loaded（脚本是否执行完成）。多次require的时候也不会再次执行改模块，直接到缓存中取值。
AMD require.js
- define 定义模块，require加载模块，语句在require的回调中，异步加载完成，才执行回调
- 异步加载模块
CDM sea.js
- 依赖是需要用到的时候require
es6模块和commonjs模块的差异
- commonjs 输出的是值的拷贝、是一个对象，es6输出的是值的引用
- commonjs 是运行时加载，es6是编译时输出，是静态的
- commonjs 的 require api 是同步加载模块，es6的import（）api是异步加载（vue-router 按需加载，代码分割）

commonjs模块加载es6模块
- require() 不行，只能使用import()方法加载
es6模块加载commonjs模块
- import 可以加载 commonjs 模块，但是只能整体加载，因为es6模块是静态的

循环加载
- commonjs：只输出已经执行的部分。所以require(‘’).变量的时候其实比较危险，因为如果发生循环引用可能变量会被更改
- es6：跳过本次引用，继续向下一步执行。解决方法可以利用函数声明的提升

参考：https://es6.ruanyifeng.com/#docs/module-loader