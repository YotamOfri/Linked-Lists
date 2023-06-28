class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  //   insert to head
  prepend(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //   inserts to last
  append(data) {
    let node = new Node(data);
    let current = this.head;
    while (current) {
      if (current.next === null) {
        current.next = node;
        break;
      }
      current = current.next;
    }
    this.size++;
  }
  Size() {
    return this.size;
  }
  //   returns the first node in the list
  Head() {
    return this.head.data;
  }
  //   returns the last node in the list
  Tail() {
    let current = this.head;
    while (current) {
      if (current.next === null) return current.data;
      current = current.next;
    }
  }
  //   print List
  printListData() {
    let current = this.head;
    while (current) {
      current = current.next;
    }
  }
  //   removes the last element from the list
  pop() {
    let current = this.head;
    while (current) {
      if (current.next.next === null) {
        current.next = null;
        break;
      }
      current = current.next;
    }
  }
  // returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    let current = this.head;
    while (current) {
      if (current.data === value) return true;
      current = current.next;
    }
    return false;
  }
  // returns the index of the node containing value, or null if not found.
  find(value) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (current.data === value) return count;
      current = current.next;
      count++;
    }
    return null;
  }
  // represents your LinkedList objects as strings, so you can print them out and preview them in the console.
  toString() {
    let current = this.head;
    let text = "";
    while (current) {
      text += `(${current.data}) -> `;
      current = current.next;
    }
    text += "null";
    return text;
  }
  //   insert by index
  insertAt(data, index) {
    if (index < 0 || index > this.size) return;
    if (index === 0) this.prepend(data);
    const node = new Node(data);
    let current = this.head;
    let previous;
    let count = 1;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }
  //  removes the node at the given index
  removeAt(index) {
    if (index < 0 || index > this.size) return;
    if (index === this.size) return this.pop();
    let current = this.head;
    if (index === 1) return (this.head = current.next);
    let count = 0;
    let previous;
    while (count < index) {
      if (count + 2 === index) previous = current;
      current = current.next;
      count++;
    }
    previous.next = current;
  }
}
