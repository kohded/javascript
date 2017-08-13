/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 3/18/2017
 * File: linked-list-test.js
 */

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

  describe('#add(element, index)', () => {
    it('should return true if element is added', () => {
      expect(linkedList.add(4, 1)).to.be.true;
    });
    it('should return undefined if element is undefined', () => {
      expect(linkedList.add(undefined, 1)).to.be.undefined;
    });
    it('should return undefined if index is undefined', () => {
      expect(linkedList.add(5, undefined)).to.be.undefined;
    });
    it('should return undefined if index is less than 0', () => {
      expect(linkedList.add(5, -1)).to.be.undefined;
    });
    it('should return undefined if index is greater than length', () => {
      expect(linkedList.add(5, 100)).to.be.undefined;
    });
  });

  describe('#append(element)', () => {
    it('should return true if element is appended', () => {
      expect(linkedList.append(4)).to.be.true;
    });
    it('should return undefined if element is undefined', () => {
      expect(linkedList.append()).to.be.undefined;
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
    it('should return undefined if head is undefined', () => {
      linkedList.remove(1);
      linkedList.remove(2);
      linkedList.remove(3);
      expect(linkedList.peek()).to.be.undefined;
    });
  });

  describe('#remove(element)', () => {
    it('should return element that is removed', () => {
      expect(linkedList.remove(2)).to.equal(2);
    });
    it('should return undefined if element is undefined', () => {
      expect(linkedList.remove()).to.be.undefined;
    });
  });

  describe('#removeAt(index)', () => {
    it('should return element that is removed', () => {
      expect(linkedList.removeAt(1)).to.equal(2);
    });
    it('should return undefined if index is undefined', () => {
      expect(linkedList.removeAt()).to.be.undefined;
    });
    it('should return undefined if index is less than 0', () => {
      expect(linkedList.removeAt(-1)).to.be.undefined;
    });
    it('should return undefined if index is greater than length', () => {
      expect(linkedList.removeAt(100)).to.be.undefined;
    });
  });

  describe('#size()', () => {
    it('should return size of list', () => {
      expect(linkedList.size()).to.equal(3);
    });
  });

  describe('#toString()', () => {
    it('should return list as a string', () => {
      expect(linkedList.toString()).to.equal('1, 2, 3');
    });
  });
});
