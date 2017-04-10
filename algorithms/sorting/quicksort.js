/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 2/26/2017
 * File: quicksort.js
 */

(function () {
  /**
   * Create pivot and partition array.
   * @param array
   * @param indexL
   * @param indexR
   * @returns {*}
   */
  const partition = function (array, indexL, indexR) {
    const pivot = array[Math.floor((indexR + indexL) / 2)];

    while (indexL <= indexR) {
      while (array[indexL] < pivot) {
        indexL++;
      }

      while (array[indexR] > pivot) {
        indexR--;
      }

      if (indexL <= indexR) {
        // Swap
        [array[indexL], array[indexR]] = [array[indexR], array[indexL]];
        indexL++;
        indexR--;
      }
    }

    return indexL;
  };

  /**
   * Recursive function for quicksort.
   * @param array
   * @param indexL
   * @param indexR
   * @returns {*}
   */
  const quickSort = function (array, indexL, indexR) {
    if (indexL < indexR) {
      const indexP = partition(array, indexL, indexR);

      quickSort(array, indexL, indexP - 1);
      quickSort(array, indexP, indexR);
    }

    return array;
  };

  /**
   * Quicksort array.
   * @param array
   */
  const quicksort = function (array) {
    return quickSort(array, 0, array.length - 1);
  };

  module.exports = quicksort;
}());
