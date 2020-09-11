function getName(node) {
  return node.name
}

function headNode(headLocation, linkedList) {
  return linkedList[headLocation]
}

function next(node, linkedList) {
  return linkedList[node.next]
}

function nodeAt(index, headAddress, linkedList) {
  let node = linkedList[headAddress];
  for (let i = 0; i < index; i++) {
    node = linkedList[node.next]
  }
  return node
}

function addressAt(index, headAddress, linkedList) {
  let address = headAddress;
  for (let i = 0; i < index; i++) {
    address = linkedList[address].next
  }
  return address
}

function indexAt(node, linkedList, headAddress) {
  let index = 0;
  let currentNode = linkedList[headAddress]
  while (currentNode.name !== node.name) {
    index++
    currentNode = linkedList[currentNode.next]
  }
  return index
}

function insertNodeAt(index, newNodeAddress, headAddress, collection) {
  let currentNode = collection[headAddress]
  for (let i = 1; i < index; i++) {
    currentNode = collection[currentNode.next]
  }
  collection[newNodeAddress].next = currentNode.next
  currentNode.next = newNodeAddress
  return collection
}

function deleteNodeAt(index, headAddress, collection) {
  if (index === 0) {
    delete collection.headAddress
    return collection
  }
  let currentNode = collection[headAddress]
  for (let i = 1; i < index - 1; i++) {
    currentNode = collection[currentNode.next]
  }
  let newNext = collection[currentNode.next].next
  delete collection[currentNode.next]
  currentNode.next = newNext
  return collection

}