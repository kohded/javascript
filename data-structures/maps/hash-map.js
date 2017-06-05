/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 6/5/2017
 * File: hash-map.js
 */

(function () {
  const HashMap = function () {
    this.hashMap = [];
    this.hashMapSize = 0;
  };

  HashMap.prototype = {
    clear() {
      this.hashMap = [];
    },
    get(key) {
      return this.hashMap[this.hashCode(key)];
    },
    hashCode(key) {
      return this.hashCodeDJB2(key);
    },
    hashCodeDJB2(key) {
      let hash = 5381;

      for (let i = 0; i < key.length; i++) {
        hash = (hash * 33) + key.charCodeAt(i);
      }

      // % prime number > needed hash map size.
      return hash % 37;
    },
    hashCodeLoseLose(key) {
      let hash = 0;

      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }

      return hash % 37;
    },
    isEmpty() {
      return this.hashMapSize === 0;
    },
    put(key, value) {
      const hashCode = this.hashCode(key);

      this.hashMap[hashCode] = value;
      this.hashMapSize++;
    },
    remove(key) {
      if (this.hashMap[this.hashCode(key)]) {
        this.hashMap[this.hashCode(key)] = undefined;
        this.hashMapSize--;

        return true;
      }

      return false;
    },
    size() {
      return this.hashMapSize;
    },
  };

  module.exports = HashMap;
}());
