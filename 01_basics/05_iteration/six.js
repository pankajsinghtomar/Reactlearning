const coding = ["JS"," ruby","java","python","cpp"]


const values = coding.forEach((item) => {
// console.log(item);
return item
})
 //console.log(values);

 const myNums= [1,2,3,4,5,6,7,8,9,10]
//  const newNums = myNums.filter ((num) =>{
//      return num>4}
   
//  )

// const newNums = []

//  myNums.forEach((num) =>{
//     if(num>4){
//         newNums.push(num)
//     }

//  })
//  console.log(newNums);


const books = [
    {title:'book one', genre:'Fiction',publish:'1981',edition:2004}
    ,
    {title:'book two', genre:'Non-Fiction',publish:'1982',edition:2005},
    {title:'book three', genre:'History',publish:'1983',edition:2006},
    {title:'book four', genre:'Non-Fiction',publish:'1984',edition:2007},
    {title:'book five', genre:'Science',publish:'1985',edition:2008} ,
    {title:'book six', genre:'Fiction',publish:'1986',edition:2009},
    {title:'book seven', genre:'History',publish:'1987',edition:2010},
    {title:'book eight', genre:'Science',publish:'1988',edition:2011},
    {title:'book nine', genre:'Non-Fiction',publish:'1989',edition:2012}

]

const userBooks = books.filter((bk) =>bk.genre === 'History')


console.log(userBooks);