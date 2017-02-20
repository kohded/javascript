/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 2/19/2017
 * File: merge-sort-test.js
 */

const expect = require('chai').expect;
const mergeSort = require('../../../algorithms/sorting/merge-sort.js');

describe('MergeSort', () => {
  describe('#sort', () => {
    it('should sort an array', () => {
      const unsorted = [9, 3, 7, 1, 8, 2, 9, 5, 4, 6, 0];

      expect(mergeSort(unsorted)).to.eql([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9]);
    });
  });
});
