/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 6/5/2017
 * File: hash-map-test.js
 */

const expect = require('chai').expect;
const HashMap = require('../../../data-structures/maps/hash-map');

describe('HashMap', () => {
  let hashMap;

  beforeEach(() => {
    hashMap = new HashMap();
    hashMap.put('Russell Wilson', 'Quarterback');
  });

  describe('#clear()', () => {
    it('should clear all elements in the hash map', () => {
      expect(hashMap.clear()).to.be.empty;
    });
  });

  describe('#get(key)', () => {
    it('should return undefined if key is not found', () => {
      expect(hashMap.get('Richard Sherman')).to.be.undefined;
    });
    it('should return value if key is found', () => {
      expect(hashMap.get('Russell Wilson')).to.equal('Quarterback');
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
      expect(hashMap.isEmpty()).to.be.true;
    });
    it('should return false if hash map is not empty', () => {
      expect(hashMap.isEmpty()).to.be.false;
    });
  });

  describe('#put(key, value)', () => {
    it('should return value with get function if element was put', () => {
      hashMap.put('Richard Sherman', 'Cornerback');
      expect(hashMap.get('Russell Wilson')).to.equal('Quarterback');
      expect(hashMap.get('Richard Sherman')).to.equal('Cornerback');
    });
  });

  describe('#remove(key)', () => {
    it('should return false if element was not found and removed', () => {
      expect(hashMap.remove('Richard Sherman')).to.be.false;
    });
    it('should return true if element was removed', () => {
      expect(hashMap.remove('Russell Wilson')).to.be.true;
    });
  });

  describe('#size()', () => {
    it('should return the number of elements in the hash map', () => {
      expect(hashMap.size()).to.equal(1);
    });
  });
});
