// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === also check data type

console.log("2" === 2);



// The reason is that an equality check == and comparison > < <= >= work differently
// Comparison convert null to a number treating it as 0
// thats why nul>=0 is true and null>0 is false