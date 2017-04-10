/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 2/27/2017
 * File: quicksort-test.js
 */

const expect = require('chai').expect;
const quicksort = require('../../../algorithms/sorting/quicksort.js');

describe('Quicksort', () => {
  describe('#quicksort(array)', () => {
    it('should return sorted array', () => {
      const unsorted = [9, 3, 7, 1, 8, 2, 9, 5, 4, 6, 0];

      expect(quicksort(unsorted)).to.eql([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 9]);
    });
  });
});
