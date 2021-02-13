[dom事件流](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow)
事件捕获=>事件处理=>事件冒泡
- 事件冒泡：时事件从发生事件的节点的父亲节点开始逐层向上传递
- 时间处理：处理事件响应
- 事件捕获：事件从window逐层像内传递直到到达目标节点的父亲节点

- 事件传播可以通过event.stopPropagationt停止,但是这个api不能阻止元素的默认行为
- event.stopImmediatePropagation即可以阻止冒泡，又可以阻止元素上绑定的其他事件的监听函数的执行
- 元素的默认事件可以通过event.preventDefault阻止，例如a标签的跳转以及form表单的提交，但是事件依然会继续传播
- 事件委托：利用事件冒泡的机制，在父元素上绑定事件，子元素触发事件时，就会冒泡到付元素进行处理
- 如何创建[自定义事件](https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events/Creating_and_triggering_events)
、、、
// 普通自定义事件
var event = new Event('test');
dom.addEventListener('test', function () {}, false);
dom.dispatchEvent('test');
// 向事件添加自定义数据
var event = new CustomEvent('test', { a: 1})
dom.addEventListener('test', function (e) {
    console.log(e.a); // 1
}, false);
、、、