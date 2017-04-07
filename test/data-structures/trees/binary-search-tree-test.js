/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 3/19/2017
 * File: binary-search-tree-test.js
 */

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-expressions */

const expect = require('chai').expect;
const BinarySearchTree = require('../../../data-structures/trees/binary-search-tree.js');

describe('BinarySearchTree', () => {
  let emptyBST;
  let bst;

  beforeEach(() => {
    emptyBST = new BinarySearchTree();
    bst = new BinarySearchTree();
    bst.insert(2);
    bst.insert(1);
    bst.insert(3);
  });

  describe('#insert(key)', () => {
    it('should return undefined if key was not inserted', () => {
      expect(bst.insert()).to.be.undefined;
    });
    it('should return key and check if key was inserted with search function', () => {
      expect(bst.search(2)).to.equal(2);
      expect(bst.search(1)).to.equal(1);
      expect(bst.search(3)).to.equal(3);
    });
  });

  describe('#remove(key)', () => {
    it('should return undefined if element is not found and is not removed', () => {
      expect(bst.remove(4)).to.be.undefined;
    });
    it('should return null and check if key was removed with search function', () => {
      bst.remove(2);
      bst.remove(1);
      bst.remove(3);
      expect(bst.search(2)).to.be.null;
      expect(bst.search(1)).to.be.null;
      expect(bst.search(3)).to.be.null;
    });
  });

  describe('#search(key)', () => {
    it('should return null if tree is empty and there is not a head', () => {
      expect(emptyBST.search()).to.be.null;
    });
    it('should return null if key is not found', () => {
      expect(bst.search(4)).to.be.null;
    });
    it('should return key if element is found', () => {
      expect(bst.search(2)).to.equal(2);
      expect(bst.search(1)).to.equal(1);
      expect(bst.search(3)).to.equal(3);
    });
  });

  describe('#max(current)', () => {
    it('should return null if tree is empty and there is not a head', () => {
      expect(emptyBST.max()).to.be.null;
    });
    it('should return max key', () => {
      expect(bst.max()).to.equal(3);
    });
  });

  describe('#min(current)', () => {
    it('should return null if tree is empty and there is not a head', () => {
      expect(emptyBST.min()).to.be.null;
    });
    it('should return min key', () => {
      expect(bst.min()).to.equal(1);
    });
  });

  describe('#inOrder()', () => {
    it('should print keys in-order', () => {
      expect(bst.inOrder(bst.printKey)).to.equal(console.log(1, 2, 3));
    });
  });

  describe('#postOrder()', () => {
    it('should print keys in post-order', () => {
      expect(bst.postOrder(bst.printKey)).to.equal(console.log(1, 3, 2));
    });
  });

  describe('#preOrder()', () => {
    it('should print keys in pre-order', () => {
      expect(bst.preOrder(bst.printKey)).to.equal(console.log(2, 1, 3));
    });
  });

  describe('#printKey()', () => {
    it('should print key to console', () => {
      expect(bst.printKey(3)).to.equal(console.log(3));
    });
  });
});
