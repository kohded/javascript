/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 4/8/2017
 * File: object-literal.js
 */

const myModule = {
  myProperty: 'someValue',
  // Object literals can contain properties and methods.
  // e.g we can define a further object for module configuration:
  myConfig: {
    useCaching: true,
    language: 'en',
  },
  // A very basic method.
  saySomething() {
    console.log('Where in the world is Arnold Koh today?');
  },
  // Output a value based on the current configuration.
  reportMyConfig() {
    console.log(`Caching is: ${(this.myConfig.useCaching ? 'enabled' : 'disabled')}`);
  },
  // Override the current configuration.
  updateMyConfig(newConfig) {
    if (typeof newConfig === 'object') {
      this.myConfig = newConfig;
      console.log(this.myConfig.language);
    }
  },
};

// Outputs: Where in the world is Arnold Koh today?
myModule.saySomething();

// Outputs: Caching is: enabled
myModule.reportMyConfig();

// Outputs: fr
myModule.updateMyConfig({
  language: 'fr',
  useCaching: false,
});

// Outputs: Caching is: disabled
myModule.reportMyConfig();
