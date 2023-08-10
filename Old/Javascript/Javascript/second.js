

// // console.log(10+5);
// // console.log(10-5);
// // console.log(10*5);
// // console.log(10/5);
// // console.log(13%5);
// // // a=5;
// // // console.log(++a);
// // // console.log(--a);

// // let a=3;
// // let b=2;
// // console.log(a**b)


// // // Assignment (=)  : +=, -= 

// // let a=5
// // let b=a;

// // console.log(b)
// // console.log(a+=2); //a = a+2;
// // console.log(a-=2); //a = a-2;

// //Comparison : it return the reult as True or False
// // >, <, >=, <=, ==, === !=, !===

// console.log(4>5) //false
// console.log(4<5) //true
// console.log(4<=5) //true
// console.log(4>=5) //flase
// console.log(5>=5) //true
// console.log(5=="5") //true
// console.log(5==="5") //false
// console.log(5!=="5") //true
// console.log(5!="5") // false


//Logic : it return result as True or false, but it combine Comparison operator
// &&, ||, !
//&& => all condtion must be true = result will be = true, if any condtion false then result is "False"
// T  T   T  T = Result : T
//T  T T  F = Result : F
/// if any one condition is False then Result is = False
console.log(true && true && true && true) /// true
console.log(true && true && true && false) /// false
console.log(4>=4 && 4<=4 && 4===4) //true
console.log(4>=4 && 4<4 && 4===4) //flase

//|| if any one condition is true then result is = True.
console.log(true || false || false || false) /// true
console.log(false || false || false || false) /// false

console.log(4>4 || 4<=4 || 4===4) //true
console.log(4>4 || 4<4 || 4===6) //flase