/**
 * Trie 字典树
 *  描述
 *   又称单词查找树，Trie树，是一种树形结构，是一种哈希树的变种。
 *   典型应用是用于统计，排序和保存大量的字符串（但不仅限于字符串），所以经常被搜索引擎系统用于文本词频统计。
 *   它的优点是：利用字符串的公共前缀来减少查询时间，最大限度地减少无谓的字符串比较，查询效率比哈希树高。--- 选自百度百科
 *  特性
 *   根节点不包含字符，除根节点外每一个节点都只包含一个字符；
 *   从根节点到某一节点，路径上经过的字符连接起来，为该节点对应的字符串；
 *   每个节点的所有子节点包含的字符都不相同。
 */

// 节点
class TrieNode {
  constructor(val) {
    this.val = val // 节点值
    this.children = new Map() // 节点的叶
    this.isEnd = false // 是否是单词
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode(null)
  }
  
  // 添加
  add (word) {
    if (!word) return Error('word is required')
    word += ''
    let node = this.root
    for (let c of word) {
      if (node.children.has(c)) {
        node = node.children.get(c)
      } else {
        let child = new TrieNode(c)
        node.children.set(c, child)
        // console.log(node)
        node = child
      }
    }
    node.isEnd = true
  }
  
  // 删除
  remove (word) {
    if (!word) return Error('word is required')
    word += ''
    let node = this.root
    let parent = node
    for (let c of word) {
      if (node.children.has(c)) {
        // 缓存父节点
        parent = node
        node = node.children.get(c)
      } else {
        return Error('without such word')
      }
    }
    
    if (node.children.size) { // 有子节点 false
      node.isEnd = false
    } else { // 没有字节点，直接删除
      parent.children.delete(node.val)
    }
  }
  
  // 是否包含某个单词
  contains (word) {
    if (!word) return Error('word is required')
    word += ''
    let root = this.root
    for (let c of word) {
      if (root.children.has(c)) {
        root = root.children.get(c)
      } else {
        return false
      }
    }
    return root.isEnd
  }
  
  // 获取所有单词
  getWordAll () {
    let result = []
    for (let item of this.root.children) {
      result.push(...this.getWordHelper(item[1], [item[0]]))
    }
    return result
  }
  
  // 获取所有单词
  getWordHelper (node, data) {
    let result = []
    if (node.children.size === 0 || node.isEnd) {
      result.push(data.join(''))
    }
    for (let item of node.children) {
      data.push(item[0]);
      result.push(...this.getWordHelper(item[1], data))
      data.pop();
    }
    return result
  }
  
  // 获取以给定单词开头的所有单词
  startWithWords (word) {
    if (!word) return Error('word is required')
    word += ''
    let root = this.root
    for (let c of word) {
      if (root.children.has(c)) {
        // 找到匹配的最后一个节点
        root = root.children.get(c)
      } else {
        return []
      }
    }
    // 以最后一个节点为根节点开始遍历
    return this.getWordHelper(root, [word])
  }
}

let trie = new Trie()

// test
trie.add('a')
trie.add('ab')
trie.add('abc')
trie.add('abcedddsadas')
trie.add('abcdddsadas')
console.log(trie.getWordAll())
trie.remove('ab')
console.log(trie.getWordAll())
console.log(trie.startWithWords('abcd'))
