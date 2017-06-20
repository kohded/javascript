/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 6/19/2017
 * File: hash-map-separate-chaining-test.js
 */

const expect = require('chai').expect;
const HashMap = require('../../../data-structures/maps/hash-map-separate-chaining');

describe('HashMap', () => {
  let hashMap;

  beforeEach(() => {
    hashMap = new HashMap();
    hashMap.put('Russell Wilson', 'Quarterback');
    // Richard Sherman and Jermain Kearse cause collision.
    hashMap.put('Richard Sherman', 'Cornerback');
    hashMap.put('Jermain Kearse', 'Wide Receiver');
  });

  describe('#clear()', () => {
    it('should clear all elements in the hash map', () => {
      expect(hashMap.clear()).to.be.empty;
    });
  });

  describe('#get(key)', () => {
    it('should return undefined if key is not found', () => {
      expect(hashMap.get('Jimmy Graham')).to.be.undefined;
    });
    it('should return value if key is found', () => {
      expect(hashMap.get('Russell Wilson')).to.equal('Quarterback');
      expect(hashMap.get('Richard Sherman')).to.equal('Cornerback');
      expect(hashMap.get('Jermain Kearse')).to.equal('Wide Receiver');
    });
  });

  describe('#hashCode(key)', () => {
    it('should return hashcode for key', () => {
      expect(hashMap.hashCode('Russell Wilson')).to.equal(33);
      expect(hashMap.hashCodeDJB2('Russell Wilson')).to.equal(33);
      expect(hashMap.hashCodeLoseLose('Russell Wilson')).to.equal(8);
    });
  });

  describe('#isEmpty()', () => {
    it('should return true if hash map is empty', () => {
      hashMap.remove('Russell Wilson');
      hashMap.remove('Richard Sherman');
      hashMap.remove('Jermain Kearse');
      expect(hashMap.isEmpty()).to.be.true;
    });
    it('should return false if hash map is not empty', () => {
      expect(hashMap.isEmpty()).to.be.false;
    });
  });

  describe('#put(key, value)', () => {
    it('should return value with get function if element was put', () => {
      hashMap.put('Jimmy Graham', 'Tight End');
      expect(hashMap.get('Russell Wilson')).to.equal('Quarterback');
      expect(hashMap.get('Richard Sherman')).to.equal('Cornerback');
      expect(hashMap.get('Jermain Kearse')).to.equal('Wide Receiver');
      expect(hashMap.get('Jimmy Graham')).to.equal('Tight End');
    });
  });

  describe('#remove(key)', () => {
    it('should return false if element was not found and removed', () => {
      expect(hashMap.remove('Jimmy Graham')).to.be.false;
    });
    it('should return true if element was removed', () => {
      expect(hashMap.remove('Russell Wilson')).to.be.true;
    });
  });

  describe('#size()', () => {
    it('should return the number of elements in the hash map', () => {
      expect(hashMap.size()).to.equal(3);
    });
  });
});
