/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 2/16/2017
 * File: object-creation.js
 */

// 3 common ways to create new objects.
// 1.
const newObject1 = {};
console.log(newObject1);

// 2.
const newObject2 = Object.create(Object.prototype);
console.log(newObject2);

// 3.
const newObject3 = new Object();
console.log(newObject3);

// 4 ways in which keys and values can be assigned to an object.
// ECMAScript 3
// 1. Dot notation
newObject1.newKey = 'New key dot notation';
const newKeyDotNotation = newObject1.newKey;
console.log(newKeyDotNotation);

// 2. Bracket notation
newObject2['newKey'] = 'New key bracket notation';
const newKeyBracketNotation = newObject2['newKey'];
console.log(newKeyBracketNotation);

// ECMAScript 5
// 3. Object.defineProperty
Object.defineProperty(newObject1, 'newKey', {
  value: 'More control of properties',
  writable: true,
  enumerable: true,
  configurable: true,
});
console.log(newObject1);

// or
const defineProperty = (object, key, value) => {
  const config = {
    value,
    writable: true,
    enumerable: true,
    configurable: true,
  };
  Object.defineProperty(object, key, config);
};

// Use defineProperty
const person = Object.create(Object.prototype);
defineProperty(person, 'firstName', 'Albert');
defineProperty(person, 'lastName', 'Einstein');
defineProperty(person, 'age', 21);
console.log(person);

// 4. Object.defineProperties
Object.defineProperties(newObject1, {
  someKey: {
    value: 'Some key',
    writable: true,
  },
  anotherKey: {
    value: 'Another key',
    writable: false,
  },
});
console.log(newObject1);
