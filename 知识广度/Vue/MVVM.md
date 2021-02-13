Vue MVVM = compile + Observer + Watcher + Dep
- Dep负责添加订阅和发布消息
- compile 负责解析模板，找出绑定数据的部分，创建Watcher，Watcher中通过Dep添加订阅
  - compile的时候有个优化的点，利用documentFragmentl来做parse，避免过多的操作dom节点，以提高性能和效率
- Observer负责劫持数据，set的时候利用Dep发布变更事件，从而更新视图

参考
- [手写MVVM](https://segmentfault.com/a/1190000006599500)