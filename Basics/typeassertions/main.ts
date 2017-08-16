// message type is any
let message;
message = 'abc';
//must compile using target es2016 and above for endsWith()
//tsc typeassertions/main.ts -t "es2016"

//two ways of type assertions/casting
let endsWithC = (message as string).endsWith('c');
let alternativeWay = (<string>message).endsWith('C');
console.log(endsWithC);
console.log(alternativeWay);