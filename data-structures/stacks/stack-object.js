/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 6/20/2017
 * File: stack-object.js
 */

(function () {
  const Stack = function () {
    this.stack = {};
    this.stackSize = 0;
  };

  Stack.prototype = {
    /**
     * Push an element on top of the stack.
     * @param element The object to be added.
     * @returns {*} The object that was added.
     */
    push(element) {
      this.stack[this.stackSize] = element;
      this.stackSize++;

      return this.peek();
    },
    /**
     * Pop an element off the top of the stack.
     * @returns {*} The object at the top of the stack.
     */
    pop() {
      if (!this.stackSize) {
        return undefined;
      }

      const element = this.peek();
      delete this.stack[this.stackSize - 1];
      this.stackSize--;

      return element;
    },
    /**
     * Peek at the element on the top of the stack without removal.
     * @returns {*} The object at the top of the stack.
     */
    peek() {
      return this.stack[this.stackSize - 1];
    },
    /**
     * Return the number of elements in the stack.
     * @returns {Number} The size of the stack.
     */
    size() {
      return this.stackSize;
    },
    /**
     * Check if the stack is empty.
     * @returns {boolean} If empty returns true.
     */
    isEmpty() {
      return this.stackSize === 0;
    },
    /**
     * Clear all elements from the stack.
     */
    clear() {
      this.stack = {};
      this.stackSize = 0;
    },
    /**
     * Return string representation of the stack.
     */
    toString() {
      return JSON.stringify(this.stack);
    },
  };

  module.exports = Stack;
}());
