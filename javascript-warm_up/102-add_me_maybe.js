#!/usr/bin/node

function addMeMaybe(number, theFunction) {
  number++;

  // Recursive call
  addMeMaybe(number, theFunction);

  // Call the provided function with the final incremented number after all recursive calls
  theFunction(number);
}

module.exports = {
  addMeMaybe: addMeMaybe
};
