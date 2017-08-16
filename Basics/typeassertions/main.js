let message;
message = 'abc';
//must compile using es2016 and above for endsWith()
//tsc typeassertions/main.ts -t "es2016"
//two ways of type assertions/casting
let endsWithC = message.endsWith('c');
let alternativeWay = message.endsWith('C');
console.log(endsWithC);
console.log(alternativeWay);
