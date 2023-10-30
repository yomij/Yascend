/**
 * Date: 2023/10
 *
 * 给定一个头节点为 head 的链表用于记录一系列核心肌群训练项目编号，请查找并返回倒数第 cnt 个训练项目编号。
 *
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} cnt
 * @return {ListNode}
 */
var trainingPlan = function(head, cnt) {
    let h = head
    let p = head
    while (cnt > 0) {
        h = h.next
        cnt--
    }
    while (h) {
        h = h.next
        p = p.next
    }
    return p
};