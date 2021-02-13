BFC 块级格式化上下文：无论BFC中如何变化，都不会对外部产生影响，可以用于解决margin重叠的问题和清楚浮动
如何形成BFC？
- 根元素 html
- overflow属性设置为非visible的取值
- display：flex、inline-blox、table、table-cell