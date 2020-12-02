/**
 * 堆的js实现
 */
class Heap {
  /**
   * @param compare 比较函数
   */
  constructor(compare = (a, b) => a - b > 0) {
    this.heap = [0]
    this.compare = compare
  }
  
  /**
   * 获取当前堆的大小
   */
  get size () {
    return this.heap.length - 1
  }
  
  /**
   * 获取父节点index
   * @param i
   * @returns {number}
   * @private
   */
  _parent (i) { return i >> 1 }
  
  /**
   * 获取左孩子节点index
   * @param i
   * @returns {number}
   * @private
   */
  _left (i) { return i * 2 }
  
  /**
   * 获取右孩子节点index
   * @param i
   * @returns {number}
   * @private
   */
  _right (i) { return i * 2 + 1 }
  
  /**
   * 交换两个节点
   * @param i
   * @param j
   * @private
   */
  _swap (i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }
  
  /**
   * 上浮第 i 个节点
   * @param i
   * @private
   */
  _up (i) {
    while (i > 1 && this.compare(this.heap[this._parent(i)], this.heap[i])) {
      this._swap(i, this._parent(i))
      i = this._parent(i)
    }
  }
  
  /**
   * 下沉第 i 个节点
   * @param i
   * @private
   */
  _down (i) {
    while (this._left(i) <= this.size) {
      let child = this._left(i)
      if (
        this._right(i) <= this.size &&
        this.compare(this.heap[child], this.heap[this._right(i)])
      ) {
        child = this._right(i)
      }
      if (this.compare(this.heap[child], this.heap[i])) {
        return
      }
      this._swap(i, child)
      i = child
    }
  }
  
  /**
   * 推入元素
   * @param v
   */
  push (v) {
    this.heap.push(v)
    this._up(this.heap.length - 1)
  }
  
  /**
   * 抛出元素
   * @returns {null|numer}
   */
  pop() {
    if (this.size === 0) return null
    this._swap(1, this.size)
    let value = this.heap.pop()
    this._down(1)
    return value
  }
}

module.exports = Heap
