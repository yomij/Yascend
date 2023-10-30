export const ListNode = function (v) {
    this.val = v
    this.next = null
}

export const format = (v = []) => {
    if (!v.length) {
        return null
    }
    let t = new ListNode(v[0])
    const root = t
    for (let i = 1; i < v.length; i++) {
        t.next = new ListNode(v[i])
        t = t.next
    }
    return root
}

export const printList = n => {
    if (!n) return null
    const data = []
    while(n) {
        data.push(n.val)
        n = n.next
    }
    return data
}

export class Heap {
    data;
    compare;
    constructor(arr, compareFn) {
        this.compare = compareFn || ((a, b) => Number(a) - Number(b));
        if (Array.isArray(arr) && arr.length) {
            this.data = [...arr];
            if (this.data.length > 1) {
                this.heapify();
            }
        }
        else {
            this.data = [];
        }
    }
    getSize() {
        return this.data.length;
    }
    isEmpty() {
        return this.getSize() === 0;
    }
    parent(i) {
        if (i === 0) {
            throw new Error('index-0 dosen\'t have parent.');
        }
        return Math.floor((i - 1) / 2);
    }
    leftChild(i) {
        return i * 2 + 1;
    }
    rightChild(i) {
        return i * 2 + 2;
    }
    // 添加元素
    add(e) {
        this.data.push(e);
        this.shiftUp(this.data.length - 1);
    }
    // 查看堆顶元素
    peek() {
        if (this.isEmpty()) {
            throw new Error('heap is empty!');
        }
        return this.data[0];
    }
    // 删除堆顶元素
    extraTop() {
        const ret = this.peek();
        this.data[0] = this.data[this.data.length - 1];
        this.data.pop();
        this.shiftDown(0);
        return ret;
    }
    // 上浮
    shiftUp(k) {
        while (k > 0 && this.compare(this.data[k], this.data[this.parent(k)]) >= 0) {
            this.swap(k, this.parent(k));
            k = this.parent(k);
        }
    }
    // 下沉
    shiftDown(k) {
        while (this.leftChild(k) < this.getSize()) {
            let j = this.leftChild(k);
            if (j + 1 < this.getSize() && this.compare(this.data[j], this.data[j + 1]) < 0) {
                j++;
            }
            if (this.compare(this.data[k], this.data[j]) >= 0) {
                break;
            }
            this.swap(k, j);
            k = j;
        }
    }
    swap(i, j) {
        const temp = this.data[i];
        this.data[i] = this.data[j];
        this.data[j] = temp;
    }
    // 将数组整理成堆
    heapify() {
        for (let k = this.parent(this.getSize() - 1); k >= 0; k--) {
            this.shiftDown(k);
        }
    }
}