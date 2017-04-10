/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 4/7/2017
 * File: stack.js
 */

(function () {
  const Stack = function () {
    this.stack = [];
  };

  Stack.prototype = {
    /**
     * Push an element on top of the stack.
     * @param element The object to be added.
     */
    push(element) {
      return this.stack.push(element);
    },
    /**
     * Pop an element off the top of the stack.
     * @returns {*|T} The object at the top of the stack.
     */
    pop() {
      return this.stack.pop();
    },
    /**
     * Peek at the element on the top of the stack without removal.
     * @returns {*} The object at the top of the stack.
     */
    peek() {
      return this.stack[this.stack.length - 1];
    },
    /**
     * Return the number of elements in the stack.
     * @returns {Number} The size of the stack.
     */
    size() {
      return this.stack.length;
    },
    /**
     * Check if the stack is empty.
     * @returns {boolean} If empty returns true.
     */
    isEmpty() {
      return this.stack.length === 0;
    },
    /**
     * Clear all elements from the stack.
     */
    clear() {
      this.stack = [];
    },
    /**
     * Return string representation of the stack.
     */
    toString() {
      return this.stack.toString();
    },
  };

  module.exports = Stack;
}());
