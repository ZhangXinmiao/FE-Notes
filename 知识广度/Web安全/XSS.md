- XSS: Cross Site scripting 跨站脚本攻击
- 产生原因：网站中有不安全的表单，攻击者可以注入script标签执行自己键入的脚本
- 如何防御：
  - 对输入进行校验，把输入的敏感字符过滤、专一、替换
  - 禁止未授权的脚本加载（[CSP](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Security-Policy)）
- React中的防御机制：
- Vue中的防御机制：

https://juejin.cn/post/6844903842635579405#heading-2