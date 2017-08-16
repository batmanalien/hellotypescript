//normal function declaration
let log = function (message){
    console.log(message);
}

//arrow function with one parameter
let doLog = (message) => console.log(message);
//can be without parenthesis if there is only one parameter
//but not good practice
let doLog2 = message => console.log(message);

let doLog3 = (x, y) => console.log('x = ' + x + ', y = ' + y);

let doLog4 = () => console.log('arrow function with no parameter');

log('normal function');
doLog('arrow function');
doLog2('arrow function');
doLog3(4, 7);
doLog4();

