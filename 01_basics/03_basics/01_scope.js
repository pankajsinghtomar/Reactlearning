let a= 10
if (true){
    
const b = 20
 c = 30
  //console.log("INNER:",c);
}
// console.log(a)
// console.log(b)
// console.log(c)
function one(){
    const username = "pankaj"
    function two (){
        const website = "youtube"
        console.log(username)
    }
    console.log(website)
    two()
}
 if (true){
  const username = "Pankaj"
  if (username ==="Pankaj"){
    const website = "youtube"
    // console.log(username + website)
  }
  //console.log(website)
 }
 //+++++++++++++++++++++++++interesting+++++++++++++++++++++++++++++++++++++
 console.log(addOne(5))
 function addOne(num){
  return num + 1
 }
 
 addTwo(5)
 const addTwo = function(num){
  return num+2
 }
