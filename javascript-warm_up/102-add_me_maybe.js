#!/usr/bin/node

function addMeMaybe(number, theFunction) {
  // Base case: Stop recursion when the number exceeds a certain limit
  if (number > 10) {
    return;
  }

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
