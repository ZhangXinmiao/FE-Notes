webpack 配置

- base作为共用部分、可以按照环境拆分例如线上、测试环境、线下环境等等。（webpack-merge）
- 线下环境尽量避免代码压缩等耗时插件
- 好习惯：resolve配置项
    - modules：缩小webpack搜索文件范围
    - extension：指定文件后缀，也是优化搜索
    - alias：文件路径别名，用于简化引用频次高的文件引用
- 常用 loader：
    -  style-loader 把css注入到dom中
    - url-loader和file-loader：解决项目中import和require的 图片字体等等
    - url-loader基于file-loader，用于将项目中符合条件的文件转化为base64。怎么选择看项目情况，需要把小图片打包进去可以用url-loader
- 排查包大小可以使用webpack-analyze-plugin分析
- 排查各个loader、plugin耗时使用speed-measure-webpack-plugin分析

webpack3 到 webpack4：https://webpack.docschina.org/migrate/4/
- 新增了mode字段，取值production默认开启各项优化
- commonChunkPlugin变更为splitChunckPlugin
- 支持 tree shaking，需要在package.json中开启sideeffects对文件进行标记
