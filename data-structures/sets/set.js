/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 3/29/2017
 * File: set.js
 */

module.exports = (function () {
  const Set = function () {
    this.items = [];
  };

  Set.prototype = {
    /**
     * Add a new item to the set.
     * @param value
     * @returns {boolean}
     */
    add(value) {
      if (!this.has(value)) {
        this.items.push(value);
        return true;
      }

      return false;
    },
    /**
     * Clear all items from the set.
     */
    clear() {
      this.items = [];
    },
    /**
     * Delete a specified item from the set.
     * @param value
     * @returns {boolean}
     */
    delete(value) {
      if (this.has(value)) {
        this.items.splice(this.items.indexOf(value), 1);
        return true;
      }

      return false;
    },
    /**
     * Check if a value exists in the set.
     * @param value
     * @returns {boolean}
     */
    has(value) {
      return this.items.indexOf(value) > -1;
    },
    /**
     * Return the number of items in the set.
     * @returns {Number}
     */
    size() {
      return this.items.length;
    },
    /**
     * Return an array of all items in the set.
     * @returns {Array}
     */
    values() {
      return this.items;
    },
    /**
     * Given two sets, return a new set with items that only exist in the first set.
     * @param set
     * @returns {*|Array|Iterator.<T>}
     */
    difference(set) {
      const newSet = new Set();

      this.values().forEach((value) => {
        if (!set.has(value)) {
          newSet.add(value);
        }
      });

      return newSet.values();
    },
    /**
     * Given two sets, return a new set with items that only exist in both sets.
     * @param set
     * @returns {Set}
     */
    intersection(set) {
      const newSet = new Set();

      this.items.forEach((value) => {
        if (set.has(value)) {
          newSet.add(value);
        }
      });

      return newSet.values();
    },
    /**
     * Given two sets, confirm if a set is a subset of another set.
     * @param set
     * @returns {boolean}
     */
    subset(set) {
      let isSubset = true;

      if (this.size() > set.size()) {
        return false;
      }

      this.items.forEach((value) => {
        if (!set.has(value)) {
          isSubset = false;
        }
      });

      return isSubset;
    },
    /**
     * Given two sets, return a new set with all items in both sets.
     * @param set
     * @returns {*|Array|Iterator.<T>}
     */
    union(set) {
      const newSet = new Set();

      this.items.forEach(value => newSet.add(value));
      set.values().forEach(value => newSet.add(value));

      return newSet.values();
    },
  };

  return Set;
}());
