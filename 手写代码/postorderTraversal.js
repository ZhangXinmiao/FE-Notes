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
// 后续遍历：左右中
var postorderTraversal = function(root, result = []) {
    if (!root) return [];
    if (root.left) {
        postorderTraversal(root.left, result);
    }
    if (root.right) {
        postorderTraversal(root.right, result);
    }
    result.push(root.val);
    return result;
};