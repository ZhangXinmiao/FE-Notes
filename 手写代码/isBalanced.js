// 平衡二叉树
// 给定一个二叉树,确定它是高度平衡的。对于这个问题,一棵高度平衡的二叉树的定义是：
// 一棵二叉树中每个节点的两个子树的深度相差不会超过1。 
// 样例  1:
// 输入: tree = {3,9,20,#,#,15,7}
// 输出: true

// 样例解释:
// 如下，是一个平衡的二叉树。
//     3  
//     / \                
//   9  20                
//     /  \                
//     15   7 
// 样例  2:
// 输入: tree = {1,#,2,3,4}
// 输出: false

// 样例解释:
// 如下，是一个不平衡的二叉树。1的左右子树高度差2
//     1
//       \                
//       2                
//     /  \                
//     3   4

function Node (value, left = null, right = null) {
    this.val = value;
    this.left = left;
    this.right = right;
}

// true
var tree1 = new Node(3, new Node(9), new Node(20, new Node(15), new Node(7)));
// false
var tree2 = new Node(1, null, new Node(2, new Node(3), new Node(4)));

var isBalanceTree = function (tree) {
    
};