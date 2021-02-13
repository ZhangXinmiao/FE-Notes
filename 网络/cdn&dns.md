cdn 帮我们做静态资源加速
cdn 的本质是 dns智能调度 + n台缓存服务器
CNAME：理解成”别名“，可以让多个域名指向同一个ip，这样如果域名对应的ip发生了变化，只需要修改底层的映射就可以了，不需要修改上层的CNAME
怎么能查看域名对应的CNAME:
```
dig CNAME 域名
```

参考：
- https://juejin.cn/post/6844903497494855687
- https://www.jianshu.com/p/1dae6e1680ff
- https://www.zhihu.com/question/22587247