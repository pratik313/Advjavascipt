// using Module and required
// import using required
const add = require("./addndsub.js");
const multi = require("./multinddivide.js");

// first method of first file Which is add
let addition = add.add(20,24);
console.log("Addition : " +addition);

// second Method of first file which is sub
let s = add.sub(30,20);
console.log("Substraction : " +s);


// first method of second file Which is mult
let m = multi.mult(5,5);
console.log("Mulitplication : " +m);

// second Method of second file which is divide
let d = multi.divide(20,5);
console.log("Divide : " +d);
