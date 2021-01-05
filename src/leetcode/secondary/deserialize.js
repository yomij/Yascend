/**
 * Date: 2020/12/31
 * Tag: Stack
 * Question:
 *  385. 迷你语法分析器
 *  给定一个用字符串表示的整数的嵌套列表，实现一个解析它的语法分析器。
 *  列表中的每个元素只可能是整数或整数嵌套列表
 *
 *  提示：你可以假定这些字符串都是格式良好的：
 *  字符串非空
 *  字符串不包含空格
 *  字符串只包含数字0-9、[、-、,、]
 *
 */

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

// 测试使用
var NestedInteger = function() {
  this._integer = null;
  this._list = [];
  this.setInteger = (integer) => {this._integer = integer};
  this.add = (item) => {this._list.push(item)};
}

/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function(s) {
  function factory(v) {
    let res = new NestedInteger()
    typeof v !== 'undefined' && res.setInteger(Number(v))
    return res
  }
  if (s[0] !== '[') {
    return factory(s)
  }
  let num = 0, sign = 1, nestedStack = [], isNum = false
  for (let i of s) {
    switch (i) {
      case '[':
        nestedStack.push(factory())
        break
      case '-':
        sign = -1
        break
      case ']': case ',':
        if (isNum) {
          nestedStack[nestedStack.length - 1].add(factory(num * sign))
        }
        num = 0,sign = 1,isNum = false
        if (i === ']' && nestedStack.length > 1) {
          let nestedInteger = nestedStack.pop()
          nestedStack[nestedStack.length - 1].add(nestedInteger)
        }
        break
      default:
        isNum = true
        num = Number(i) + num * 10
    }
  }
  return nestedStack[0]
};
