/**
 * Date: 2023/11/01
 *
 * 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
 * 你应当 保留 两个分区中每个节点的初始相对位置。
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const arrL = []
    const arrR = []
    let cur = head
    while (cur) {
        if (cur.val > x) arrR.push(cur.val)
        else arrL.push(cur.val)
        cur = cur.next
    }
    const res = new ListNode()
    let reader = res;
    [...arrL, ...arrR].forEach(i => {
        reader.next = new ListNode(i)
        reader= reader.next
    })
    return res.next
};
