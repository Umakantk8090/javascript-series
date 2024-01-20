// date

let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);



// let myCreatDate=new Date(2023,0,23)
//let myCreatDate=new Date(2023,0,23,5,3)
//let myCreatDate=new Date("2023-01-14")
let myCreatDate=new Date("01-02-2023")
// console.log(myCreatDate.toLocaleDateString());

// console.log(myCreatDate);
// console.log(myCreatDate.toDateString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatDate.getTime());
//console.log(Math.floor(Date.now()/1000));


let newDate=new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear());


newDate.toLocaleString('default',{
    weekday:"long",
    
})





