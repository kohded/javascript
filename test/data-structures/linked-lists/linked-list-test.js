/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 3/18/2017
 * File: linked-list-test.js
 */

const expect = require('chai').expect;
const LinkedList = require('../../../data-structures/linked-lists/linked-list.js');

const linkedList = new LinkedList();
const emptyLinkedList = new LinkedList();

describe('LinkedList', () => {
  describe('#append(element)', () => {
    it('should return true if element is appended', () => {
      expect(linkedList.append(5)).to.be.true;
    });
    it('should return false if element is undefined', () => {
      expect(linkedList.append()).to.be.false;
    });
  });

  describe('#indexOf(element)', () => {
    it('should return index of the element', () => {
      linkedList.append(10);
      expect(linkedList.indexOf(5)).to.equal(0);
      expect(linkedList.indexOf(10)).to.equal(1);
    });
    it('should return -1 if element is not found', () => {
      expect(linkedList.indexOf(15)).to.equal(-1);
    });
    it('should return -1 if element is undefined', () => {
      expect(linkedList.indexOf()).to.equal(-1);
    });
  });

  describe('#insert(element, index)', () => {
    it('should return true if element is inserted', () => {
      expect(linkedList.insert(15, 1)).to.be.true;
    });
    it('should return false if element is undefined', () => {
      expect(linkedList.insert(undefined, 2)).to.be.false;
    });
    it('should return false if index is undefined', () => {
      expect(linkedList.insert(20, undefined)).to.be.false;
    });
    it('should return false if index is less than 0', () => {
      expect(linkedList.insert(20, -1)).to.be.false;
    });
    it('should return false if index is greater than length', () => {
      expect(linkedList.insert(20, 100)).to.be.false;
    });
  });

  describe('#isEmpty()', () => {
    it('should return true if list is empty', () => {
      expect(emptyLinkedList.isEmpty()).to.be.true;
    });
    it('should return false if list is not empty', () => {
      expect(linkedList.isEmpty()).to.be.false;
    });
  });

  describe('#peek()', () => {
    it('should return head element', () => {
      expect(linkedList.peek()).to.equal(5);
    });
    it('should return null if head is null', () => {
      expect(emptyLinkedList.peek()).to.equal(null);
    });
  });

  describe('#size()', () => {
    it('should return size of list', () => {
      expect(linkedList.size()).to.equal(3);
    });
  });

  describe('#remove(element)', () => {
    it('should return element that is removed', () => {
      expect(linkedList.remove(15)).to.equal(15);
    });
    it('should return null if element is undefined', () => {
      expect(linkedList.remove()).to.equal(null);
    });
  });

  describe('#removeAt(index)', () => {
    it('should return element that is removed', () => {
      expect(linkedList.removeAt(1)).to.equal(10);
    });
    it('should return null if index is undefined', () => {
      expect(linkedList.removeAt()).to.equal(null);
    });
    it('should return null if index is less than 0', () => {
      expect(linkedList.removeAt(-1)).to.equal(null);
    });
    it('should return null if index is greater than length', () => {
      expect(linkedList.removeAt(100)).to.equal(null);
    });
  });

  describe('#toString()', () => {
    it('should return list as a string', () => {
      linkedList.append(10);
      linkedList.append(15);
      expect(linkedList.toString()).to.equal('5, 10, 15');
    });
  });
});
