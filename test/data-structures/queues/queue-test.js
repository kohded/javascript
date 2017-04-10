/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 4/7/2017
 * File: queue-test.js
 */

const expect = require('chai').expect;
const Queue = require('../../../data-structures/queues/queue');

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
  });

  describe('#enqueue(element)', () => {
    it('should return false if element was not enqueued', () => {
      expect(queue.enqueue()).to.be.false;
    });
    it('should return true if element was enqueued', () => {
      expect(queue.enqueue(4)).to.be.true;
    });
  });

  describe('#dequeue()', () => {
    it('should return null if queue is empty and element was not dequeued', () => {
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      expect(queue.dequeue()).to.be.null;
    });
    it('should return element that was dequeued', () => {
      expect(queue.dequeue()).to.equal(1);
      expect(queue.dequeue()).to.equal(2);
      expect(queue.dequeue()).to.equal(3);
    });
  });

  describe('#peek()', () => {
    it('should return null if queue is empty', () => {
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      expect(queue.peek()).to.be.null;
    });
    it('should return element that was dequeued', () => {
      expect(queue.peek()).to.equal(1);
    });
  });

  describe('#isEmpty()', () => {
    it('should return true if queue is empty', () => {
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      expect(queue.isEmpty()).to.be.true;
    });
    it('should return false if queue is not empty', () => {
      expect(queue.isEmpty()).to.be.false;
    });
  });

  describe('#size()', () => {
    it('should return size of the queue', () => {
      expect(queue.size()).to.equal(3);
    });
  });

  describe('#toString()', () => {
    it('should return string representation of queue', () => {
      expect(queue.toString()).to.equal('1,2,3');
    });
  });
});
