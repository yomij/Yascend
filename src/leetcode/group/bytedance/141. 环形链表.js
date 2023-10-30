/**
 * Date: 2023/10
 *
 * 给你一个链表的头节点 head ，判断链表中是否有环。
 *
 */

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
    if (!head) return false
    let a = head
    let b = head.next
    while(a !== b) {
        if (!a || !b) return false
        a = a.next
        b =  b.next ? b.next.next : null
    }
    return !!a
};