/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 6/19/2017
 * File: hash-map-separate-chaining.js
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
      const bucketMap = this.hashMap[this.hashCode(key)];

      return bucketMap ? bucketMap.get(key) : undefined;
    },
    hashCode(key) {
      return this.hashCodeDJB2(key);
    },
    hashCodeDJB2(key) {
      let hash = 5381;

      key.split('').forEach((char) => {
        hash = (hash * 33) + char.charCodeAt(0);
      });

      return hash % 37;
    },
    hashCodeLoseLose(key) {
      let hash = 0;

      key.split('').forEach((char) => {
        hash += char.charCodeAt(0);
      });

      return hash % 37;
    },
    isEmpty() {
      return this.hashMapSize === 0;
    },
    put(key, value) {
      const bucketIndex = this.hashCode(key);

      if (!this.hashMap[bucketIndex]) {
        this.hashMap[bucketIndex] = new Map();
      }

      if (!this.hashMap[bucketIndex].has(key)) {
        this.hashMapSize++;
      }

      this.hashMap[bucketIndex].set(key, value);
    },
    remove(key) {
      const bucketMap = this.hashMap[this.hashCode(key)];

      if (bucketMap && bucketMap.has(key)) {
        bucketMap.delete(key);
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
