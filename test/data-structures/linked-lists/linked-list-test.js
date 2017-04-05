/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 3/18/2017
 * File: linked-list-test.js
 */

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-expressions */

const expect = require('chai').expect;
const LinkedList = require('../../../data-structures/linked-lists/linked-list.js');

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
  });

  describe('#append(element)', () => {
    it('should return true if element is appended', () => {
      expect(linkedList.append(4)).to.be.true;
    });
    it('should return false if element is undefined', () => {
      expect(linkedList.append()).to.be.false;
    });
  });

  describe('#indexOf(element)', () => {
    it('should return index of the element', () => {
      expect(linkedList.indexOf(1)).to.equal(0);
      expect(linkedList.indexOf(2)).to.equal(1);
      expect(linkedList.indexOf(3)).to.equal(2);
    });
    it('should return -1 if element is not found', () => {
      expect(linkedList.indexOf(4)).to.equal(-1);
    });
    it('should return -1 if element is undefined', () => {
      expect(linkedList.indexOf()).to.equal(-1);
    });
  });

  describe('#insert(element, index)', () => {
    it('should return true if element is inserted', () => {
      expect(linkedList.insert(4, 1)).to.be.true;
    });
    it('should return false if element is undefined', () => {
      expect(linkedList.insert(undefined, 1)).to.be.false;
    });
    it('should return false if index is undefined', () => {
      expect(linkedList.insert(5, undefined)).to.be.false;
    });
    it('should return false if index is less than 0', () => {
      expect(linkedList.insert(5, -1)).to.be.false;
    });
    it('should return false if index is greater than length', () => {
      expect(linkedList.insert(5, 100)).to.be.false;
    });
  });

  describe('#isEmpty()', () => {
    it('should return true if list is empty', () => {
      linkedList.remove(1);
      linkedList.remove(2);
      linkedList.remove(3);
      expect(linkedList.isEmpty()).to.be.true;
    });
    it('should return false if list is not empty', () => {
      expect(linkedList.isEmpty()).to.be.false;
    });
  });

  describe('#peek()', () => {
    it('should return head element', () => {
      expect(linkedList.peek()).to.equal(1);
    });
    it('should return null if head is null', () => {
      linkedList.remove(1);
      linkedList.remove(2);
      linkedList.remove(3);
      expect(linkedList.peek()).to.equal(null);
    });
  });

  describe('#size()', () => {
    it('should return size of list', () => {
      expect(linkedList.size()).to.equal(3);
    });
  });

  describe('#remove(element)', () => {
    it('should return element that is removed', () => {
      expect(linkedList.remove(2)).to.equal(2);
    });
    it('should return null if element is undefined', () => {
      expect(linkedList.remove()).to.equal(null);
    });
  });

  describe('#removeAt(index)', () => {
    it('should return element that is removed', () => {
      expect(linkedList.removeAt(1)).to.equal(2);
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
      expect(linkedList.toString()).to.equal('1, 2, 3');
    });
  });
});
