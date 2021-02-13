- get 参数据传输在 url 显示拼接，post数据传输一般在 body 里 （协议未规定，实现层面的）
- get 请求有大小限制，浏览器和服务器都有
- get 请求被缓存无副作用，post有，可能造成表单重复提交
- post 请求可能分两次发出：1 request header response 101 continue、1 request body (协议未规定，实现层面的)
- get 幂等，post不幂等（幂等：请求一次和请求一万次结果一样）

> [参考](https://www.zhihu.com/question/28586791)