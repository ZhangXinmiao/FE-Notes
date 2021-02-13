- 内容安全策略CSP（Content Security Policy）
- 可以通过设置HTTP response header来控制能够为页面加载那些资源，者可以有效防止跨站脚本攻击（XSS：Cross Site Script）
  ```
  <!-- 禁用不安全的内联/动态执行, 只允许通过 https加载这些资源 (images, fonts, scripts, etc.) -->
  // header
  Content-Security-Policy: default-src https:

  // meta tag
  <meta http-equiv="Content-Security-Policy" content="default-src https:">
  ```