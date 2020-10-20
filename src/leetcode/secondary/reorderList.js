/**
 * Date: 2020/10/20
 * Tag: Linked list
 * Question:
 *  143. 重排链表
 *   给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
 *   将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if(!head) return null
  let tempHead = head
  let nodeList = []
  while (tempHead) {
    nodeList.push(tempHead)
    tempHead = tempHead.next
  }
  let left = 1
  let right = nodeList.length - 1
  while(left <= right){
    head.next = nodeList[right]
    head = head.next
    head.next = nodeList[left]
    head = head.next
    right--
    left++
  }
  head.next = null
  return head
};

// TODO 快慢指针找到中点 后半链表逆序后合并链表
