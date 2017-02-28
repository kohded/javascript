/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 2/26/2017
 * File: quicksort.js
 */

/**
 * Swap values if left is > pivot, right < pivot, and indexes don't pass each other.
 * @param array
 * @param left
 * @param right
 */
const swap = function (array, left, right) {
  [array[left], array[right]] = [array[right], array[left]];
};

/**
 * Create pivot and partition array.
 * @param array
 * @param left
 * @param right
 * @returns {*}
 */
const partition = function (array, left, right) {
  const pivot = array[Math.floor((right + left) / 2)];
  let indexL = left;
  let indexR = right;

  while (indexL <= indexR) {
    while (array[indexL] < pivot) {
      indexL++;
    }

    while (array[indexR] > pivot) {
      indexR--;
    }

    if (indexL <= indexR) {
      swap(array, indexL, indexR);
      indexL++;
      indexR--;
    }
  }

  return indexL;
};

/**
 * Recursive function for quicksort.
 * @param array
 * @param left
 * @param right
 * @returns {*}
 */
const quickSort = function (array, left, right) {
  if (left < right) {
    const index = partition(array, left, right);

    quickSort(array, left, index - 1);
    quickSort(array, index, right);
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
