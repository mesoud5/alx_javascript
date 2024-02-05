#!/usr/bin/node
const callMeMoby = function (x, theFunction) {
    return x * theFunction()
};
callMeMoby(3, function () {
  console.log('C is fun');
});