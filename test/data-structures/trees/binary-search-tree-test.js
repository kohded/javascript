/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 3/19/2017
 * File: binary-search-tree-test.js
 */

const expect = require('chai').expect;
const BinarySearchTree = require('../../../data-structures/trees/binary-search-tree.js');

describe('BinarySearchTree', () => {
  let emptyBST;
  let bst;

  beforeEach(() => {
    emptyBST = new BinarySearchTree();
    bst = new BinarySearchTree();
    bst.insert(8);
    bst.insert(4);
    bst.insert(12);
    bst.insert(2);
    bst.insert(6);
    bst.insert(10);
    bst.insert(14);
    bst.insert(1);
    bst.insert(3);
    bst.insert(5);
    bst.insert(7);
    bst.insert(9);
    bst.insert(11);
    bst.insert(13);
    bst.insert(15);
  });

  describe('#insert(key)', () => {
    it('should return key and check if key was inserted with search function', () => {
      expect(bst.search(1)).to.equal(1);
      expect(bst.search(2)).to.equal(2);
      expect(bst.search(3)).to.equal(3);
      expect(bst.search(4)).to.equal(4);
      expect(bst.search(5)).to.equal(5);
      expect(bst.search(6)).to.equal(6);
      expect(bst.search(7)).to.equal(7);
      expect(bst.search(8)).to.equal(8);
      expect(bst.search(9)).to.equal(9);
      expect(bst.search(10)).to.equal(10);
      expect(bst.search(11)).to.equal(11);
      expect(bst.search(12)).to.equal(12);
      expect(bst.search(13)).to.equal(13);
      expect(bst.search(14)).to.equal(14);
      expect(bst.search(15)).to.equal(15);
    });
  });

  describe('#remove(key)', () => {
    it('should return undefined if tree is empty and there is not a root', () => {
      expect(emptyBST.remove()).to.be.undefined;
    });
    it('should return undefined and check if key was removed with search function', () => {
      bst.remove(8);
      bst.remove(4);
      bst.remove(12);
      bst.remove(2);
      bst.remove(6);
      bst.remove(10);
      bst.remove(14);
      bst.remove(1);
      bst.remove(3);
      bst.remove(5);
      bst.remove(7);
      bst.remove(9);
      bst.remove(11);
      bst.remove(13);
      bst.remove(15);
      expect(bst.search(1)).to.be.undefined;
      expect(bst.search(2)).to.be.undefined;
      expect(bst.search(3)).to.be.undefined;
      expect(bst.search(4)).to.be.undefined;
      expect(bst.search(5)).to.be.undefined;
      expect(bst.search(6)).to.be.undefined;
      expect(bst.search(7)).to.be.undefined;
      expect(bst.search(8)).to.be.undefined;
      expect(bst.search(9)).to.be.undefined;
      expect(bst.search(10)).to.be.undefined;
      expect(bst.search(11)).to.be.undefined;
      expect(bst.search(12)).to.be.undefined;
      expect(bst.search(13)).to.be.undefined;
      expect(bst.search(14)).to.be.undefined;
      expect(bst.search(15)).to.be.undefined;
    });
  });

  describe('#search(key)', () => {
    it('should return undefined if tree is empty and there is not a root', () => {
      expect(emptyBST.search()).to.be.undefined;
    });
    it('should return undefined if key is not found', () => {
      expect(bst.search(16)).to.be.undefined;
    });
    it('should return key if element is found', () => {
      expect(bst.search(1)).to.equal(1);
      expect(bst.search(2)).to.equal(2);
      expect(bst.search(3)).to.equal(3);
      expect(bst.search(4)).to.equal(4);
      expect(bst.search(5)).to.equal(5);
      expect(bst.search(6)).to.equal(6);
      expect(bst.search(7)).to.equal(7);
      expect(bst.search(8)).to.equal(8);
      expect(bst.search(9)).to.equal(9);
      expect(bst.search(10)).to.equal(10);
      expect(bst.search(11)).to.equal(11);
      expect(bst.search(12)).to.equal(12);
      expect(bst.search(13)).to.equal(13);
      expect(bst.search(14)).to.equal(14);
      expect(bst.search(15)).to.equal(15);
    });
  });

  describe('#max(current)', () => {
    it('should return undefined if tree is empty and there is not a root', () => {
      expect(emptyBST.max()).to.be.undefined;
    });
    it('should return max key', () => {
      expect(bst.max()).to.equal(15);
    });
  });

  describe('#min(current)', () => {
    it('should return undefined if tree is empty and there is not a root', () => {
      expect(emptyBST.min()).to.be.undefined;
    });
    it('should return min key', () => {
      expect(bst.min()).to.equal(1);
    });
  });

  describe('#inOrder()', () => {
    it('should return undefined if tree is empty and there is not a root', () => {
      expect(emptyBST.inOrder()).to.be.undefined;
    });
    it('should return array of keys in-order', () => {
      expect(bst.inOrder()).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    });
  });

  describe('#postOrder()', () => {
    it('should return undefined if tree is empty and there is not a root', () => {
      expect(emptyBST.postOrder()).to.be.undefined;
    });
    it('should return array of keys in post-order', () => {
      expect(bst.postOrder()).to.deep.equal([1, 3, 2, 5, 7, 6, 4, 9, 11, 10, 13, 15, 14, 12, 8]);
    });
  });

  describe('#preOrder()', () => {
    it('should return undefined if tree is empty and there is not a root', () => {
      expect(emptyBST.preOrder()).to.be.undefined;
    });
    it('should return array of keys in pre-order', () => {
      expect(bst.preOrder()).to.deep.equal([8, 4, 2, 1, 3, 6, 5, 7, 12, 10, 9, 11, 14, 13, 15]);
    });
  });
});
