| Object | [Map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map) | [WeakMap](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) |
| ------------ | ------------ | ------------ |
| Object有原型，原型链上的简明可能可自己对象的键名产生冲突 | Map只有显示set的键，键可以是任意值 | 键只能是对象
| Object的键是无序的 | 有序，set的顺序 | 键不可枚举 |
| 可以利用键迭代  | Map是可迭代的 | 可迭代 |
| 没有什么优化 | 适用频繁增删键值对的场景，性能更好 | WeakMap持有的是键对象的弱引用，有利于垃圾回收 |
