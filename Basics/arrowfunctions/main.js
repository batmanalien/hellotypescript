//normal function declaration
var log = function (message) {
    console.log(message);
};
//arrow function with one parameter
var doLog = function (message) { return console.log(message); };
//can be without parenthesis if there is only one parameter
//but not good practice
var doLog2 = function (message) { return console.log(message); };
var doLog3 = function (x, y) { return console.log('x = ' + x + ', y = ' + y); };
var doLog4 = function () { return console.log('arrow function with no parameter'); };
log('normal function');
doLog('arrow function');
doLog2('arrow function');
doLog3(4, 7);
doLog4();
