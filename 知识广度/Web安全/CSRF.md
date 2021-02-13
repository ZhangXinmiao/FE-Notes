- CSRF:Cross Site Request frogery 跨站请求共攻击。攻击者诱导受害者进入第三方网站，在第三方网站中向被攻击的网站发送跨站请求。利用受害者在受攻击网站已经获取的凭证，绕过后台的用户验证，以达到冒充用户对受攻击网站执行有害操作的目的
- 常见的CSRF攻击通过img标签、自动提交表单、引诱用户点击的a标签等
- CSRF两个特点：
  - 通常发生在第三方域名
  - 攻击者不能获取到cookie等信息，只能使用
- 如何防护
  - 阻止不信任域名的访问：同源检测、Samesite Cookie （SameSite：Strict 但是使用samesite需要看下兼容性）
  - 提交时要求携带只有本域才能获取到的信息 CSRF Token
    - 服务器生成随机的CSRF Token，放在a标签和form标签上
    - 页面提交的请求携带token，对于get请求，token加载参数上；对于post请求，需要为form表单添加一个type为hidden类型的input，这样token就能够以参数的形式在请求中传输，服务端就可以检查cookie和表单里带的token参数是不是一样的(因为攻击者只能用cookie但是不能获取到)/或者用随机数也可以
  - 验证码
  - 检测referer，不建议，referer可能被篡改

参考：https://github.com/YvetteLau/Blog/tree/master/Security （csrf和xss的示例）