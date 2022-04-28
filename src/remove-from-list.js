const { NotImplementedError } = require("../extensions/index.js")

function removeKFromList(list, elemList) {
  if (list.value === elemList) list = list.next

  let current = list

  while (current.next) {
    current.next.value === elemList
      ? (current.next = current.next.next)
      : (current = current.next)
  }

  return list
}

module.exports = {
  removeKFromList,
}
