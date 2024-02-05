#!/usr/bin/node
function addMeMaybe (number, theFunction) {
    number++;
    addMeMaybe(number, theFunction);
}
module.exports = {
    addMeMaybe: addMeMaybe
};