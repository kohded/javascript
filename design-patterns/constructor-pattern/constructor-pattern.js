/**
 * @author Arnold Koh <arnold@kohded.com>
 * Developed: 2/16/2017
 * File: constructor-pattern.js
 */

// Basic constructor
// Problems with the basic constructor pattern are; inheritance is difficult
// and functions like toString are redefined for every new instance of the same
// type.
function Athlete(firstName, lastName, sport) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sport = sport;
  this.toString = function () {
    return `${this.firstName} ${this.lastName} is a athlete in the ${this.sport}`;
  };
}

const mlb = new Athlete('Robinson', 'Cano', 'MLB');
const nfl = new Athlete('Russell', 'Wilson', 'NFL');

console.log(mlb.toString());
console.log(nfl.toString());

// Constructor with Prototypes
// With the Prototype all properties are made available to the new object.
// This allows for the function such as toString to be shared for every new
// instance of the same type.
function NFLAthlete(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

NFLAthlete.prototype.toString = function () {
  return `${this.firstName} ${this.lastName} is a athlete in the NFL`;
};

const nflAthlete1 = new NFLAthlete('Jimmy', 'Graham');
const nflAthlete2 = new NFLAthlete('Russell', 'Wilson');

// Both nflAthletes access the same toString from the NFLAthlete prototype.
console.log(nflAthlete1.toString());
console.log(nflAthlete2.toString());
