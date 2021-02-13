a.x = a = {n:2}
// 有一个新的a产生，它覆盖了原始的变量a，它的值是{n:2}；最左侧的“a.x”的计算结果中的“原始的变量a”在引用传递的过程中丢失了，且“a.x”被同时丢弃，所以第二次述职时失败的
// 意味着给旧的变量添加一个指向新变量的属性

var i = 10, root = {index: "NONE"}, node = root;

// 创建链表
while (i > 0) {
  node.next = node = new Object;
  node.index = i--;  // 这里可以开始给新node添加成员
}

// 测试
node = root;
while (node = node.next) {
  console.log(node.index);
}