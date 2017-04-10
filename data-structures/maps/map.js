/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 4/9/2017
 * File: map.js
 */

(function () {
  const Map = function () {
    this.map = {};
  };

  Map.prototype = {
    /**
     * Clear all elements in the map.
     */
    clear() {
      this.map = {};
    },
    /**
     * Delete value by specified key.
     * @param key
     */
    delete(key) {
      if (this.has(key)) {
        delete this.map[key];
        return true;
      }

      return false;
    },
    /**
     * Return a value by specified key.
     * @param key
     */
    get(key) {
      return this.has(key) ? this.map[key] : undefined;
    },
    /**
     * Return the map.
     * @returns {Array|{}|*}
     */
    getMap() {
      return this.map;
    },
    /**
     * Check if key exists in the map.
     * @param key
     */
    has(key) {
      // return Object.prototype.hasOwnProperty.call(this.map, key);
      return key in this.map;
    },
    /**
     * Return an array of all keys in the map.
     */
    keys() {
      return Object.keys(this.map);
    },
    /**
     * Set new element in the map.
     * @param key
     * @param value
     */
    set(key, value) {
      this.map[key] = value;
    },
    /**
     * Return the number of elements in the map.
     */
    size() {
      return Object.keys(this.map).length;
    },
    /**
     * Return an array of all values in the map.
     */
    values() {
      return Object.keys(this.map).map(key => this.map[key]);
    },
  };

  module.exports = Map;
}());
