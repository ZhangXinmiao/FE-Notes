关于node_modules
- node_modules 目录不应被上传到git仓库中，package.json 和 package-lock.json 应该被上传到 git中，这保证了不同的设备上能够安装相同的依赖，因为执行npm install的时候，npm会使用package-lock.json中的版本

npm 包的版本管理：Semver 语义化版本的版本管理
- ~ 只更新补丁版本
- ^ 更新补丁版本和次要版本，大版本不变
- 确切版本

npm install 发生了什么
- 有preinstall，先执行preinstall
- 如果有—production或者—only=prod，只安装dependencies中的包；否则dependencies和devDependence中的包都会安装（这一特性在精简打包产物大小的时候可能派上用场）
- 看node_modules中有没有
- 有，不在重新安装
-  没有
    - 向registry查询压缩包地址
    - 下载压缩包地址（mac一般在.npm 目录下 npm config get cache）
    - 解压压缩包到 node_module 目录
