- readyState:document的加载状态，加载状态发生变化的时候会触发readystatechange事件
，共有三个状态：
  - loading：加载中(这个时间点对应performance.timing.domLoading)
  - interactive：dom元素可以访问，图像、样式表等还在加载
  - complete：页面所有内容都已经加载完成(这个时间点对应performance.timing.domComplete)

- 等同于[DomContentLoaded](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/DOMContentLoaded_event)的写法（jquery ready）
- 这个时间点就是performance.timing.domInteractive
、、、
document.addEventListener('readystatechange', function () {
    if (document.readyState === 'interative') {
        getDom();
        console.log('DOM fully loaded and parsed');
    }
});
、、、

- 等同于[load](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event)事件的写法
- 这个时间点就是performance.timing.domContentLoadedEventStart
、、、
document.addEventListener('readystatechange', function () {
    if (document.readyState === 'complete') {
        console.log('Page is fully loaded');
    }
});
、、、