// https://leetcode-cn.com/problems/linked-list-cycle/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var p1 = head;
    var p2 = p1;
    while(p1 && p2) {
        p1 = p1.next;
        p2 = p2.next ? p2.next.next : null;
        if (!p1 || !p2) return false;
        if (p1 === p2) return true;
    }
    return false;
};