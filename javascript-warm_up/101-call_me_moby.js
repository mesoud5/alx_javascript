#!/usr/bin/node
function callMeMoby (x, theFunction) {
    return x * theFunction()
};
module.exports = {
  callMeMoby: callMeMoby
};