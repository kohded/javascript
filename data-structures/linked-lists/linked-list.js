/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 2/28/2017
 * File: linked-list.js
 */

const LinkedList = function () {
  this.length = 0;
  this.head = null;
};

const Node = function (element) {
  this.element = element;
  this.next = null;
};

LinkedList.prototype = {
  append(element) {
    // Check if element is undefined.
    if (element === undefined) {
      return false;
    }

    const node = new Node(element);
    let current;

    // First node in the list, assign head.
    if (this.head === null) {
      this.head = node;
    }
    else {
      // Assign current to head for the starting point.
      current = this.head;

      // Loop to the last element.
      while (current.next) {
        current = current.next;
      }

      // Assign the last node next to the new node.
      current.next = node;
    }

    this.length++;

    return true;
  },
  indexOf(element) {
    // Check if element is undefined.
    if (element === undefined) {
      return -1;
    }

    let current = this.head;
    let index = 0;

    // Loop through nodes. If element is found return index.
    while (current) {
      if (element === current.element) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  },
  insert(element, index) {
    // Check if index is out-of-bounds or element and index is undefined.
    if (index < 0 || index > this.length || element === undefined || index === undefined) {
      return false;
    }

    const node = new Node(element);
    let current = this.head;
    let previous;
    let i = 0;

    // Insert first node in the list.
    if (index === 0) {
      node.next = current;
      this.head = node;
    }
    else {
      // Loop one short of index.
      while (i++ < index) {
        previous = current;
        current = current.next;
      }

      // Assign the the new node.
      node.next = current;
      previous.next = node;
    }

    this.length++;

    return true;
  },
  isEmpty() {
    return this.length <= 0;
  },
  peek() {
    if (this.head === null) {
      return null;
    }

    return this.head.element;
  },
  remove(element) {
    // Check if element is undefined.
    if (element === undefined) {
      return null;
    }

    const index = this.indexOf(element);

    return this.removeAt(index);
  },
  removeAt(index) {
    // Check if index is out-of-bounds or undefined.
    if (index < 0 || index >= this.length || index === undefined) {
      return null;
    }

    let current = this.head;
    let previous;
    let i = 0;

    // Remove the first element.
    if (index === 0) {
      this.head = current.next;
    }
    else {
      // Loop one short of index.
      while (i++ < index) {
        previous = current;
        current = current.next;
      }

      // Assign the link between the nodes adjacent to the removed node.
      previous.next = current.next;
    }

    this.length--;

    return current.element;
  },
  size() {
    return this.length;
  },
  toString() {
    let current = this.head;
    let string = '';

    // Loop through nodes and concatenate elements.
    while (current) {
      string += current.element + (current.next ? ', ' : '');
      current = current.next;
    }

    return string;
  }
};

module.exports = LinkedList;