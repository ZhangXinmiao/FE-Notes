/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 前序遍历：中左右
var preorderTraversal = function(root, result = []) {
    if (!root) return [];
    result.push(root.val);
    if (root.left) preorderTraversal(root.left, result);
    if (root.right) preorderTraversal(root.right, result);
    return result;
};