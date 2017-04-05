/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 3/30/2017
 * File: set-test.js
 */

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-expressions */

const expect = require('chai').expect;
const Set = require('../../../data-structures/sets/set.js');

describe('Set', () => {
  let set;

  beforeEach(() => {
    set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);
  });

  describe('#add(value)', () => {
    it('should return true if value is added', () => {
      expect(set.add(4)).to.be.true;
    });
    it('should return false if value exist and is not added', () => {
      expect(set.add(1)).to.be.false;
      expect(set.add(2)).to.be.false;
      expect(set.add(3)).to.be.false;
    });
  });

  describe('#clear()', () => {
    it('should clear the set', () => {
      expect(set.clear()).to.be.empty;
    });
  });

  describe('#delete(value)', () => {
    it('should return true if value is deleted', () => {
      expect(set.delete(1)).to.be.true;
      expect(set.delete(2)).to.be.true;
      expect(set.delete(3)).to.be.true;
    });
    it('should return false if value does not exist and is not deleted', () => {
      expect(set.delete(4)).to.be.false;
    });
  });

  describe('#has(value)', () => {
    it('should return true if set has value', () => {
      expect(set.has(1)).to.be.true;
      expect(set.has(2)).to.be.true;
      expect(set.has(3)).to.be.true;
    });
    it('should return false if set does not have value', () => {
      expect(set.has(4)).to.be.false;
    });
  });

  describe('#size()', () => {
    it('should return the size of the set', () => {
      expect(set.size()).to.equal(3);
    });
  });

  describe('#values()', () => {
    it('should return the size of the set', () => {
      expect(set.values()).to.deep.equal([1, 2, 3]);
    });
  });

  describe('#difference(set)', () => {
    it('should return a new set with items that only exist in the first set', () => {
      const set2 = new Set();
      set2.add(3);
      set2.add(4);
      set2.add(5);
      expect(set.difference(set2)).to.deep.equal([1, 2]);
    });
  });

  describe('#intersection(set)', () => {
    it('should return a new set with items that only exist in both sets', () => {
      const set2 = new Set();
      set2.add(3);
      set2.add(4);
      set2.add(5);
      expect(set.intersection(set2)).to.deep.equal([3]);
    });
  });

  describe('#subset(set)', () => {
    it('should return true if a set is a subset of the other set', () => {
      const set2 = new Set();
      set2.add(1);
      set2.add(2);
      set2.add(3);
      set2.add(4);
      expect(set.subset(set2)).to.be.true;
    });
    it('should return false if a set is not a subset of the other set', () => {
      const set2 = new Set();
      set2.add(3);
      set2.add(4);
      set2.add(5);
      expect(set.subset(set2)).to.be.false;
    });
    it('should return false if a subset is larger than the other set', () => {
      const set2 = new Set();
      set2.add(1);
      set2.add(2);
      expect(set.subset(set2)).to.be.false;
    });
  });

  describe('#union(set)', () => {
    it('should return a new set with all items in both sets', () => {
      const set2 = new Set();
      set2.add(3);
      set2.add(4);
      set2.add(5);
      expect(set.union(set2)).to.deep.equal([1, 2, 3, 4, 5]);
    });
  });
});
