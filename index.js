// Code your solution in this file!
// returnFirstTwoDrivers()
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// returnLastTwoDrivers()
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier()
const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

// fareDoubler()
const fareDoubler = createFareMultiplier(2);

// fareTripler()
const fareTripler = createFareMultiplier(3);

// selectDifferentDrivers()
const selectDifferentDrivers = function(drivers, selector) {
  return selector(drivers);
};

// Example usage:
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); // => ['Antonia', 'Nuru']
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); // => ['Amari', 'Mo']

const fare = 10;
console.log(fareDoubler(fare)); // => 20
console.log(fareTripler(fare)); // => 30