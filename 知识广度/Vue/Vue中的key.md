Vue 中的 diff
1、对新旧Vnode进行对比
2、如没有oldVnode，直接按照(new)vnode进行新建节点，反之再来看新旧节点是否值得进一步对比sameVnode,sameVnode认为值得比较，到步骤3
、、、
a.key === b.key && 
(有tag tag相等) &&
(都是注释) &&
(都有data) &&
...
、、、
3、patchVnode，如果节点完全相同（===），放弃比较
4、如果vnode是文字类型节点，替换文字，如果不是，进一步对比子节点们，分一下几种情况：
    - 新旧vnode都有子节点，进一步updateChildren
    - 只有新的子节点，直接新增
    - 只有旧的子节点，直接删除
5、updateChildren 两个子vnode数组遍历，四个指针
    - 队首两两节点对比、队尾两两节点对比、队首队尾相互对比（1），如果sameVnode认为节点值得比较，继续调用patchVnode
    - 如果步骤（1）中的四个判断都没有命中，用vnode的key去找旧的vnode中是否有能够复用的