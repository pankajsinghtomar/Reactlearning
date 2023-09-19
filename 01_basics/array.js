const myArray =[1,2,3,4,5 ]
const myHeroes =["shaktiman", "Nagraj","doga"]

const myArray2 =new Array(1,2,3,4)
// console.log(myArray[1])

//Array methods
// myArray2.push(6)
// myArray2.push(7)
//myArray2.unshift(0)
//myArray2.shift()
//console.log(myArray2.includes(8));
//console.log(myArray.indexOf(2))

// const newArray =myArray2.join()
// console.log(myArray2);
// console.log(newArray);

//slice ,splice
console.log("A",myArray)
const myn1 =myArray.slice(1,3)

console.log(myn1);
console.log("B",myArray)

const myn2=myArray.splice(1,3);
console.log("C",myArray);
console.log(myn2);
