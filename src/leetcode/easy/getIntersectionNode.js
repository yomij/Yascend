/**
 * Date: 2020/09/21
 * Tag: Linked list
 * Question:
 *  剑指 Offer 52. 两个链表的第一个公共节点
 *  输入两个链表，找出它们的第一个公共节点。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let nodeA = headA
  let nodeB = headB
  while (nodeA !== nodeB) {
    nodeA = nodeA === null ? headB : nodeA.next
    nodeB = nodeB === null ? headA : nodeB.next
  }
  return nodeA
};
