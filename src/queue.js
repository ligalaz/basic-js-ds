const { NotImplementedError } = require("../extensions/index.js")

const { ListNode } = require("../extensions/list-node.js")

class Queue {
  constructor() {
    this.head = null
    this.end = null
    this.length = 0
  }

  getUnderlyingList() {
    return this.head
  }

  enqueue(value) {
    if (this.length === 0) {
      this.head = new ListNode(value)
      this.end = this.head
    } else {
      let node = new ListNode(value)
      this.end.next = node
      this.end = this.end.next
    }
    this.length++
  }

  dequeue() {
    if (this.length === 0) {
      return
    } else {
      let output = this.head.value
      this.head = this.head.next
      this.length--
      return output
    }
  }
}

module.exports = {
  Queue,
}
