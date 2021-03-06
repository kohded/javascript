/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 2/16/2017
 * File: merge-sort.js
 */

(function () {
  /**
   * Merge divided subarrays in sorted order.
   * @param left
   * @param right
   * @returns {Array}
   */
  const merge = function (left, right) {
    const result = [];
    let indexL = 0;
    let indexR = 0;

    while (indexL < left.length && indexR < right.length) {
      if (left[indexL] < right[indexR]) {
        result.push(left[indexL++]);
      }
      else {
        result.push(right[indexR++]);
      }
    }

    while (indexL < left.length) {
      result.push(left[indexL++]);
    }

    while (indexR < right.length) {
      result.push(right[indexR++]);
    }

    return result;
  };

  /**
   * Recursively divide subarrays.
   * @param array
   * @returns {*}
   */
  const mergesort = function (array) {
    const length = array.length;

    if (length <= 1) {
      return array;
    }

    const middle = Math.floor(length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle, length);

    return merge(mergesort(left), mergesort(right));
  };

  /**
   * Merge sort array.
   * @param array
   */
  const mergeSort = function (array) {
    return mergesort(array);
  };

  module.exports = mergeSort;
}());
