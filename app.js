const vars = require('./vars')

vars.x = 45
vars.printX()

vars.changeX(0)

vars.printX()

console.log('x = ', vars.varX);
console.log('y = ', vars.y);

console.log('Started: vars.js');