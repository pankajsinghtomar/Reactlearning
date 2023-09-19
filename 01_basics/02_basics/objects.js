// const tinderuser = new Object()
const tinderuser ={}

tinderuser.id = "abcd"
tinderuser.name = "Sammy"
tinderuser.isLoggedIn = "true"

//console.log(tinderuser)

const regularUser={
    email:"some@gmail.com",
    fullName :{
       userfullName: {firstName:"pankaj",
        lastName:"tomar"}

    }
}

//console.log(regularUser.fullName.userfullName)
const obj1 = {1:"q",2:"b"}
const obj2 = {3:"q",4:"b"}
const obj4 = {5:"a",6:"b"}

//const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users=[
    {
        id : 1,
        email : "pankajgoogle.com",

    },
    {

    },
    {

    }
]
users[1].email
// console.log(tinderuser);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser)); 
// console.log(Object.entries(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLoggedIn]'));

const course ={
    course :"js in hindi",
    price :" 999",
    courseInstructor : "Pankaj"
}
// course.courseInstructor
const{courseInstructor  }= course
console.log(courseInstructor);