/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 4/10/2017
 * File: bubble-sort-test.js
 */

const expect = require('chai').expect;
const bubbleSort = require('../../../algorithms/sorting/bubble-sort');

describe('BubbleSort', () => {
  describe('#bubbleSort(array)', () => {
    it('should return sorted array', () => {
      const unsorted = [9, 3, 7, 1, 8, 2, 9, 5, 4, 6, 0];

      expect(bubbleSort(unsorted)).to.eql([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9]);
    });
  });
});
