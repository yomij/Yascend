/**
 * Date: 2020/08/19
 * Tag: Trie
 * Question:
 * 1032. 字符流
 *  按下述要求实现 StreamChecker 类：
 *  StreamChecker(words)：构造函数，用给定的字词初始化数据结构。
 *  query(let`ter)：如果存在某些 k >= 1，可以用查询的最后 k个字符（按从旧到新顺序，包括刚刚查询的字母）
 *  拼写出给定字词表中的某一字词时，返回 true。否则，返回 false。
 *
 */

function TrieNode(val) {
  this.val = val
  this.children = new Map()
  this.isWord = false
}

/**
 * @description 构造字典树
 * @param {string[]} words
 */
var StreamChecker = function(words) {
  // 字典树根节点
  this.root = new TrieNode(null)
  // 所有的输入 往前累加
  this.allQuery = ''
  for (let word of words) {
    this.build(word)
  }
};

/**
 * @description 拼接历史输入组成新单词 搜索
 * @param {string} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
  this.allQuery = letter + this.allQuery
  let searchNode = this.root
  for (let c of this.allQuery) {
    let node = searchNode.children.get(c)
    if (node) {
      searchNode = node
      if (node.isWord) {
        return true
      }
    } else {
      return false
    }
  }
  return false
};

/**
 * @description 构造反向字典树
 * @param {string} word
 */
StreamChecker.prototype.build = function (word) {
  let node = this.root
  for (let i = word.length - 1; i >= 0; i--) {
    let c = word[i]
    if (node.children.has(c)) {
      node = node.children.get(c)
    } else {
      let child = new TrieNode(c)
      node.children.set(c, child)
      node = child
    }
  }
  node.isWord = true
}

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */
