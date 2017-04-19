/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 4/16/2017
 * File: singleton-pattern.js
 */

const singleton = (function () {
  // Instance stores a reference to the singleton.
  let instance;

  function init() {
    // Singleton
    // Private methods and variables.
    const privateVariable = 'I am also private.';
    const privateRandomNumber = Math.random();

    function privateMethod() {
      console.log('I am private.');
    }

    return {
      // Public methods and variables.
      publicMethod() {
        console.log('The public can see me!');
      },
      publicProperty: 'I am also public.',
      getRandomNumber() {
        return privateRandomNumber;
      },
    };
  }

  return {
    // Get the singleton instance if one exists or create one if it doesn't.
    getInstance() {
      if (!instance) {
        instance = init();
      }

      return instance;
    },
  };
}());

const singletonA = singleton.getInstance();
const singletonB = singleton.getInstance();
console.log(singletonA.getRandomNumber() === singletonB.getRandomNumber()); // true


const badSingleton = (function () {
  // Instance stores a reference to the singleton.
  let instance;

  function init() {
    // Singleton
    const privateRandomNumber = Math.random();

    return {
      // Public methods and variables.
      getRandomNumber() {
        return privateRandomNumber;
      },
    };
  }

  return {
    // Always create a new Singleton instance.
    getInstance() {
      instance = init();

      return instance;
    },
  };
}());

const badSingletonA = badSingleton.getInstance();
const badSingletonB = badSingleton.getInstance();
// Note: With random numbers, there is a mathematical possibility both numbers will be the same,
// however unlikely. The above example should otherwise still be valid.
console.log(badSingletonA.getRandomNumber() === badSingletonB.getRandomNumber()); // false


const SingletonTester = (function () {
  function Singleton(options) {
    // Set options to the options supplied or an empty object if none are provided.
    options = options || {};
    // Set some properties for singleton.
    this.name = 'SingletonTest';
    this.pointX = options.pointX || 6;
    this.pointY = options.pointY || 10;
  }

  // Instance holder.
  let instance;

  // An emulation of static variables and methods.
  const staticVar = {
    name: 'SingletonTester',
    // Method for getting an instance. It returns a singleton instance of a singleton object.
    getInstance(options) {
      if (instance === undefined) {
        instance = new Singleton(options);
      }

      return instance;
    },
  };

  return staticVar;
}());

const singletonTest = SingletonTester.getInstance({
  pointX: 5,
});

// Log the output of pointX just to verify it is correct.
// Output; 5 10
console.log(singletonTest.pointX, singletonTest.pointY);
