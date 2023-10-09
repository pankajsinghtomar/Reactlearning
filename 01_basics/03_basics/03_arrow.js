const user = {
    username: "pankaj",
    price:     999,

    welcomeMessage : function(){
        // console.log('{this.price} , welcome to wbsite');
        // console.log(this);
    }

}
// user.welcomeMessage()
// user.username ="veer"
// user.welcomeMessage()

// function chai(){
//     let username = "pankaj"
//     console.log(this.username);
// }
// chai()
// const chai = function(){
// let username = "Pankaj"
// console.log(this.username);
// console.log(this)
// }
const chai = () => {
    let username = "Pankaj"
  
    console.log(this)
    }
    




// chai()
// const addTwo =(num1,num2)=>{
//     return num1+num2
// }

// const addTwo =(num1,num2) =>
//     num1 + num2
const addTwo = (num1,num2   )=> {username:"pankaj"}

console.log(addTwo(3,4))