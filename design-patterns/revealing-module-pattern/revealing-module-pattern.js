/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 4/15/2017
 * File: revealing-module-pattern.js
 */

const revealingModulePattern1 = (function () {
  let privateVar = 'Ben Cherry';
  const publicVar = 'Hey there!';

  function privateFunction() {
    console.log(`Name: ${privateVar}`);
  }

  function publicSetName(strName) {
    privateVar = strName;
  }

  function publicGetName() {
    privateFunction();
  }

  // Reveal public pointers to private functions and properties.
  return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName,
  };
}());

revealingModulePattern1.setName('Arnold Koh');


const revealingModulePattern2 = (function () {
  let privateCounter = 0;

  function privateFunction() {
    privateCounter++;
  }

  function publicIncrement() {
    privateFunction();
  }

  function publicFunction() {
    publicIncrement();
  }

  function publicGetCount() {
    return privateCounter;
  }

  // Reveal public pointers to private functions and properties.
  return {
    increment: publicIncrement,
    start: publicFunction,
    count: publicGetCount,
  };
}());

revealingModulePattern2.start();
