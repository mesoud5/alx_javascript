#!/usr/bin/node

function addMeMaybe(number, theFunction) {
  // Increment the number
  number++;

  // Recursive call
  addMeMaybe(number, theFunction);

  // Call the provided function with the incremented number
  theFunction(number);
}

module.exports = {
  addMeMaybe: addMeMaybe
};
