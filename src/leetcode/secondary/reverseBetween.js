/**
 * Date: 2020/09/18
 * Tag: Linked List
 * Question:
 *  92. 反转链表 II
 *    反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 *     1 ≤ m ≤ n ≤ 链表长度。
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if (m === n) return head
  // 反转开始节点
  let start = null
  // 反转结束节点
  let end = null
  // 添加头节点 辅助计算
  let node = new ListNode()
  node.next = head
  // 标记反转开始节点的前一节点
  let startPre = node
  // 找到 start pre 节点
  for (let i = 0; i < m - 1; i++) startPre = startPre.next
  // 找到开始节点
  start = startPre.next
  end = start
  // 找到反转结束节点
  for (let i = 0; i < n - m; i++) end = end.next
  // a b 用以辅助改变两个节点之间next指向。 这里是 a -> b
  let a = start
  let b = start.next
  // 开始遍历 处理到结束节点的前一个节点
  while (b !== end) {
    // c 用以辅助
    let c = b.next
    // 反转 a-> b 改变为 a <- b
    b.next = a
    // a b 分别向后移动一位
    a = b
    b = c
  }
  // 现在 b 和 end 指向同一个节点
  // 之后将 startPre的指针指向end节点
  startPre.next = b
  // 将开始节点的next 指向end节点的next
  start.next = b.next
  // 处理end 和 preEnd 之间的指向关系
  b.next = a
  // 返回反转后的head
  return node.next
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}
