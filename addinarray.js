let arr = [10, 20, 30, 40, 50];

// add in array
arr.push(100);
console.log(arr);

// reverse

arr.reverse();
console.log(arr);

// toreversed
let arr2 = arr.toReversed();
console.log("TO Reversed array " + arr2);


// asending
let ase = arr.sort((a, b) => {
    return a - b;
})
console.log("Ase ", [...ase]);

// desending
let desc = arr.sort((a, b) => {
    return b - a;
})
console.log("Desending : ", [...desc]);

// toSort
let arr3 = arr.toSort();
console.log("To Sort Use : " + arr3);

// toSplice
let arr4 =arr.toSplice(30,50);
console.log("Use of To Splice "+arr4);