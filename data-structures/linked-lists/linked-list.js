/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 2/28/2017
 * File: linked-list.js
 */

const LinkedList = function LinkedList() {
  this.length = 0;
  this.head = undefined;
};

const Node = function Node(element) {
  this.element = element;
  this.next = undefined;
};

LinkedList.prototype = {
  /**
   * Add a new node element at the specified index.
   * @param element
   * @param index
   * @returns {*}
   */
  add(element, index) {
    // Check if index is out-of-bounds or element and index is undefined.
    if (element === undefined || index === undefined || index < 0 || index > this.length) {
      return undefined;
    }

    const node = new Node(element);

    if (!this.head) {
      this.head = node;
    } else if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let i = 0;
      let previous;
      let current = this.head;

      while (i < index) {
        previous = current;
        current = current.next;
        i += 1;
      }

      previous.next = node;
      node.next = current;
    }

    this.length += 1;

    return true;
  },
  /**
   * Append a new node element to the end of a list.
   * @param element
   * @returns {boolean}
   */
  append(element) {
    return this.add(element, this.length);
  },
  /**
   * Return the index of a specified node element.
   * @param element
   * @returns {number}
   */
  indexOf(element) {
    if (element === undefined) { return -1; }

    let current = this.head;
    let index = 0;

    // Loop through nodes. If element is found return index.
    while (current) {
      if (element === current.element) {
        return index;
      }

      current = current.next;
      index += 1;
    }

    return -1;
  },
  /**
   * Check if a list is empty.
   * @returns {boolean}
   */
  isEmpty() {
    return this.length <= 0;
  },
  /**
   * Return the head element in a list.
   * @returns {*}
   */
  peek() {
    if (!this.head) { return undefined; }

    return this.head.element;
  },
  /**
   * Remove a node by the specified element.
   * @param element
   * @returns {*}
   */
  remove(element) {
    if (element === undefined) { return undefined; }

    const index = this.indexOf(element);

    return this.removeAt(index);
  },
  /**
   * Remove a node at the specified index.
   * @param index
   * @returns {*}
   */
  removeAt(index) {
    if (index === undefined || index < 0 || index >= this.length) {
      return undefined;
    }

    let current = this.head;
    let i = 0;
    let previous;

    // Remove the first element.
    if (index === 0) {
      this.head = current.next;
    } else {
      // Loop one short of index.
      while (i < index) {
        previous = current;
        current = current.next;
        i += 1;
      }

      // Assign the link between the nodes adjacent to the removed node.
      previous.next = current.next;
    }

    this.length -= 1;

    return current.element;
  },
  /**
   * Return the number of nodes in a list.
   */
  size() {
    return this.length;
  },
  /**
   * Return the string representation of a list.
   * @returns {string}
   */
  toString() {
    let current = this.head;
    let string = '';

    // Loop through nodes and concatenate elements.
    while (current) {
      string += current.element + (current.next ? ', ' : '');
      current = current.next;
    }

    return string;
  },
};

module.exports = LinkedList;
