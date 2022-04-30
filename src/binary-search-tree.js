const { NotImplementedError } = require("../extensions/index.js")

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  contructor() {
    this._root = null
  }

  root() {
    return this._root || null
  }

  add(data) {
    this._root = inserter(this._root, data)

    function inserter(node, data) {
      if (!node) return new Node(data)
      if (node.data === data) return node

      data < node.data
        ? (node.left = inserter(node.left, data))
        : (node.right = inserter(node.right, data))
      return node
    }
  }

  has(data) {
    return check(this._root, data)

    function check(node, data) {
      if (!node) return false
      if (node.data === data) return true
      return data < node.data ? check(node.left, data) : check(node.right, data)
    }
  }

  find(data) {
    return this.has(data) ? searcher(this._root, data) : null

    function searcher(node, data) {
      if (!node) return null
      if (node.data === data) return node

      return data < node.data
        ? (node = searcher(node.left, data))
        : (node = searcher(node.right, data))
    }
  }

  remove(data) {
    this._root = remover(this._root, data)

    function remover(node, data) {
      if (!node) return null

      if (data < node.data) {
        node.left = remover(node.left, data)
        return node
      } else if (data > node.data) {
        node.right = remover(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) return null
      }

      if (!node.right) {
        node = node.left
        return node
      }

      if (!node.left) {
        node = node.right
        return node
      }

      let maxLeft = node.left

      while (maxLeft.right) {
        maxLeft = maxLeft.right
      }

      node.data = maxLeft.data
      node.left = remover(node.left, maxLeft.data)
      return node
    }
  }

  min(node = this._root) {
    return !node.left ? node.data : this.min(node.left)
  }

  max(node = this._root) {
    return !node.right ? node.data : this.max(node.right)
  }
}

module.exports = {
  BinarySearchTree,
}
