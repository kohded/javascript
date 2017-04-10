/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 4/7/2017
 * File: queue.js
 */

(function () {
  const Queue = function () {
    this.queue = [];
  };

  Queue.prototype = {
    /**
     * Add element to the end of the queue.
     * @param element
     * @returns {boolean} If element is added returns true.
     */
    enqueue(element) {
      const size = this.size();

      if (element) {
        this.queue.push(element);
      }

      return this.size() > size;
    },
    /**
     * Remove element at the front of the queue.
     * @returns {*} The element to be removed. If empty returns null.
     */
    dequeue() {
      if (!this.size()) {
        return null;
      }

      return this.queue.shift();
    },
    /**
     * Return element at the front of the queue, without removal.
     * @returns {*} The element at the front of the queue. If empty returns null.
     */
    peek() {
      if (!this.size()) {
        return null;
      }

      return this.queue[0];
    },
    /**
     * Check if the queue is empty.
     * @returns {boolean} If empty returns true.
     */
    isEmpty() {
      return this.queue.length === 0;
    },
    /**
     * Return the number of elements in the queue.
     * @returns {Number} The size of the queue.
     */
    size() {
      return this.queue.length;
    },
    /**
     * Return string representation of queue.
     */
    toString() {
      return this.queue.toString();
    },
  };

  module.exports = Queue;
}());
