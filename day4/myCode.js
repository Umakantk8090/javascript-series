// stack (primitive),Heap (non-primitive),
// let myName="umakant"
// let anotherName=myName
// anotherName="chaiaucode"
// console.log(myName);
// console.log(anotherName);


let userOne={
    email:"umakant@gmail.com",
    upi:"user@ybl"
}
let userTwo=userOne;
userTwo.email="kanaujiya@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);