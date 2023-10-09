const useremail = ""

if (useremail){
    console.log("got user email")
}
else {
    console.log("don't have user email")
}
//falsy values
// false, 0,-0,BigInt oN,"",null,undefied,NaN           

//truthy
// "false","0"," ",[],{}, function(){}


const emptyObj = {}
if (Object.keys(emptyObj).length==0){
    console.log(`object is empty`);
}
//Nullish coalescing operator (??): null undefined

let val1;
// val1 =5?? 10    
// val1 = null ?? 10

console.log(val1)
