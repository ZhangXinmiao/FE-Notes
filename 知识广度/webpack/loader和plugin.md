### Webpack Plugin
先理解 Compiler 和 Compilation
- Compiler: 全局唯一，启动 Webpack 的时候实例化，从启动到关闭的生命周期。包含：entry/output/loaders....Compiler 提供了一些 hooks，可以在编译的各个执行订阅的函数。继承自 Tapable（类似 Node 的 Event 模块，主要是发布订阅）
- Compilation: 代表一次新的编译
### Webpack Loader
loader 的一些特点：
- loader 最好是单一职责的，一个 loader 负责处理一件事
- loader 的执行顺序：对于同一个文件，loader 执行顺序是自下而上、从右向左的（像流水线一样处理输入）