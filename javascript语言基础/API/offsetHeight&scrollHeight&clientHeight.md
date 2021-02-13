| [offsetHeight](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetHeight) | [scrollHeight](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scrollHeight) | [clientHeight](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/clientHeight) |
| ------------ | ------------ | ------------ |
| 只读属性 | 只读属性 | 只读属性
| 整数（四舍五入值，需要精确的值需要调用[getBoundingClientRect](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)） | 整数 | 整数 |
| 元素的像素高度：content + border + padding (+ 水平滚动条)  | 该元素在不使用滚动条的情况下为了适应视口中所用内容所需的最小高度content + padding | 可视区域 CSS height + CSS padding (- 水平滚动条) |
| 不包含:before :after 等伪类元素高度 | 包含::after::before伪元素
| 元素被隐藏 return 0  |  |
| ![屏幕快照 2020-12-07 下午5.34.57](../..//assets/屏幕快照%202020-12-07%20下午5.34.57.png) |![屏幕快照 2020-12-07 下午5.36.32](../..//assets/屏幕快照%202020-12-07%20下午5.36.32_7o3856yv5.png) |![屏幕快照 2020-12-07 下午5.35.37](../..//assets/屏幕快照%202020-12-07%20下午5.35.37.png) |


例子在“手写代码>heightAPI”