/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 4/15/2017
 * File: module-pattern.js
 */

const modulePattern1 = (function () {
  let counter = 0;

  return {
    incrementCounter() {
      return counter++;
    },
    resetCounter() {
      console.log(`counter value prior to reset: ${counter}`);
      counter = 0;
    },
  };
}());

// Increment the counter.
modulePattern1.incrementCounter();

// Check the counter value and reset.
// Outputs: counter value prior to reset: 1
modulePattern1.resetCounter();


// Template for namespacing, public, and private variables.
const modulePattern2 = (function () {
  let privateVar;
  let privateMethod;

  // A private counter variable.
  privateVar = 0;

  // A private function which logs any arguments.
  privateMethod = function (foo) {
    console.log(foo);
  };

  return {
    // A public variable.
    myPublicVar: 'foo',
    // A public function utilizing privates.
    myPublicFunction(bar) {
      // Increment private counter.
      privateVar++;
      // Call private method using bar.
      privateMethod(bar);
    },
  };
}());


const basketModule = (function () {
  // privates
  const basket = [];

  function doSomethingPrivate() {
    // ...
  }

  function doSomethingElsePrivate() {
    // ...
  }

  // Return an object exposed to the public.
  return {
    // Add items to the basket.
    addItem(values) {
      basket.push(values);
    },
    // Get the count of items in the basket.
    getItemCount() {
      return basket.length;
    },
    // Public alias to a private function.
    doSomething: doSomethingPrivate,
    // Get the total value of items in the basket.
    getTotal() {
      let q = this.getItemCount();
      let p = 0;

      while (q--) {
        p += basket[q].price;
      }

      return p;
    },
  };
}());

// basketModule returns an object with a public API that can be used.
basketModule.addItem({
  item: 'bread',
  price: 0.5,
});

basketModule.addItem({
  item: 'butter',
  price: 0.3,
});

// Outputs: 2
console.log(basketModule.getItemCount());

// Outputs: 0.8
console.log(basketModule.getTotal());

// However, the following will not work:
// Outputs: undefined
// This is because the basket itself is not exposed as a part of the public API.
console.log(basketModule.basket);

// This also won't work as it only exists within the scope of the basketModule closure, but not in
// the returned public object.
// console.log(basket);


// Module Pattern Variations

// Import mixins
const importMixinModule = (function (jQ, _) {
  function privateMethod1() {
    jQ('.container').html('test');
  }

  function privateMethod2() {
    console.log(_.min([10, 5, 100, 2, 1000]));
  }

  return {
    publicMethod() {
      privateMethod1();
    },
  };

  // Pull in jQuery and Underscore.
}(jQuery, _));

importMixinModule.publicMethod();


// Exports module
const exportsModule = (function () {
  // Module object
  const module = {};
  const privateVariable = 'Hello World';

  function privateMethod() {
    // ...
  }

  module.publicProperty = 'Foobar';
  module.publicMethod = function () {
    console.log(privateVariable);
  };

  return module;
}());
