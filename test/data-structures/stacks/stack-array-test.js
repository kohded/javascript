/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 4/7/2017
 * File: stack-array-test.js
 */

const expect = require('chai').expect;
const Stack = require('../../../data-structures/stacks/stack-array');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
  });

  describe('#push(element)', () => {
    it('should return element that was pushed on the stack', () => {
      expect(stack.push(4)).to.equal(4);
    });
  });

  describe('#pop()', () => {
    it('should return element that was popped off the stack', () => {
      expect(stack.pop(3)).to.equal(3);
      expect(stack.pop(2)).to.equal(2);
      expect(stack.pop(1)).to.equal(1);
    });
  });

  describe('#peek()', () => {
    it('should return element on top of the stack without removal', () => {
      expect(stack.peek()).to.equal(3);
    });
  });

  describe('#size()', () => {
    it('should return number of elements in the stack', () => {
      expect(stack.size()).to.equal(3);
    });
  });

  describe('#isEmpty()', () => {
    it('should return false if the stack is not empty', () => {
      expect(stack.isEmpty()).to.be.false;
    });
    it('should return true if the stack is empty', () => {
      const emptyStack = new Stack();
      expect(emptyStack.isEmpty()).to.be.true;
    });
  });

  describe('#clear()', () => {
    it('should return true from isEmpty after clearing the stack', () => {
      stack.clear();
      expect(stack.isEmpty()).to.be.true;
    });
  });

  describe('#toString()', () => {
    it('should return string representation of the stack', () => {
      expect(stack.toString()).to.equal('1,2,3');
    });
  });
});
