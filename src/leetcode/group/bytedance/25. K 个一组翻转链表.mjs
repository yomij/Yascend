/**
 * Date: 2023/10
 *
 * 给你链表的头节点 head ，每 k 个节点一组进行翻转，请你返回修改后的链表。
 */

import {format, Heap, ListNode, printList} from "../tools/help.mjs";

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    const reverse = n => {
        let pre = null;
        let current = n
        while (current) {
            let net = current.next
            current.next = pre
            pre = current
            current = net
        }
        return pre
    }
    let arr = []
    let i = 0
    let s
    let h = head
    while (h) {
        if (i % k === 0) {
            s = h
        }
        let t = h
        h = h.next
        if (i % k === k - 1) {
            arr.push({s, e: t})
            t.next = null
            s = null
        }
        i++
    }
    for (let item of arr) {
        reverse(item.s)
    }

    if (!arr.length) return head
    arr[arr.length - 1].s.next = s || null
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i].s.next = arr[i + 1].e
    }
    return arr[0].e
};


console.log(reverseKGroup(format([1, 2, 3, 4, 5]), 112))