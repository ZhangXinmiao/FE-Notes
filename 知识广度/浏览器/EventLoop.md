### [浏览器的EventLoop](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)
eventloop:为了协调事件、用户交互、js执行、渲染、网络请求，用户代理必须使用eventloop
- 一个eventloop有多个task queue（用户行为的task优先级高一些，因为要优先对用户的行为作出反馈）、一个microtask queue，通常microtask包括：
  - mutationobserver
  - promise.then...
  - process.nextTick
- 选择一个task queue执行
- 已经完成的任务会从任务队列中被清清除，没有了就到micro task queue
- 执行microtask queue中的任务，只要有就一直执行
- microtask队列清空后，可能进行页面更新渲染（每一轮eventloop中多次修改同一dom，只有最后一次会重新绘制,也可能不渲染，因为浏览器会保持一个比较合理的刷新频率，16.7ms）
- 再次回到第一步，形成循环

```
for (const task of taskqueue) {
  handleMacroTask();
  
  for (const microTask of microTaskQueue) {
    handleMicroTask(microTask);
  }
}
```

参考:
- https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

### Node的EventLoop
- node的eventloop基于libuv
- 