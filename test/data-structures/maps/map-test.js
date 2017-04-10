/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 4/9/2017
 * File: map-test.js
 */

const expect = require('chai').expect;
const Map = require('../../../data-structures/maps/map');

describe('Map', () => {
  let map;

  beforeEach(() => {
    map = new Map();
    map.set('Russell Wilson', 'Quarterback');
  });

  describe('#clear()', () => {
    it('should clear all elements in the map', () => {
      expect(map.clear()).to.be.empty;
    });
  });

  describe('#delete(key)', () => {
    it('should return false if element was not found and deleted', () => {
      expect(map.delete('Richard Sherman')).to.be.false;
    });
    it('should return true if element was deleted', () => {
      expect(map.delete('Russell Wilson')).to.be.true;
    });
  });

  describe('#get(key)', () => {
    it('should return undefined if key is not found', () => {
      expect(map.get('Richard Sherman')).to.be.undefined;
    });
    it('should return value if key is found', () => {
      expect(map.get('Russell Wilson')).to.equal('Quarterback');
    });
  });

  describe('#getMap()', () => {
    it('should return map', () => {
      expect(map.getMap()).to.deep.equal({ 'Russell Wilson': 'Quarterback' });
    });
  });

  describe('#has(key)', () => {
    it('should return false if map does not have element', () => {
      expect(map.has('Richard Sherman')).to.be.false;
    });
    it('should return true if map has element', () => {
      expect(map.has('Russell Wilson')).to.be.true;
    });
  });

  describe('#keys()', () => {
    it('should return an array of all keys in the map', () => {
      expect(map.keys()).to.deep.equal(['Russell Wilson']);
    });
  });

  describe('#set(key, value)', () => {
    it('should return true with has function if element was set', () => {
      map.set('Richard Sherman', 'Cornerback');
      expect(map.has('Russell Wilson')).to.be.true;
      expect(map.has('Richard Sherman')).to.be.true;
    });
  });

  describe('#size()', () => {
    it('should return the number of elements in the map', () => {
      expect(map.size()).to.equal(1);
    });
  });

  describe('#values()', () => {
    it('should return an array of all values in the map', () => {
      expect(map.values()).to.deep.equal(['Quarterback']);
    });
  });
});
