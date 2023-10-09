// for of
//["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]

for(const num of arr){
    // console.log(num);

}

const greetings = "hello world!"

for(const greet of greetings){
    // console.log(`each charecter is ${greet}`)
}


//maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('USSR',"russia")


// console.log(map);

for (const [key, value]of map){
    console.log(key,':-',value);
}
