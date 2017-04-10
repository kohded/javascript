/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 4/10/2017
 * File: bubble-sort.js
 */

(function () {
  const bubbleSort = function (array) {
    const length = array.length;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }

    return array;
  };

  module.exports = bubbleSort;
}());
