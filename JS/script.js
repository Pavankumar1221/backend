// Fundamentals of JavaScript
// arrays and objects
// function return
// async js coding
// foreach, map, filter, find, indexOf

// var arr=[1,2,3,4,5,6];
// arr.forEach(function(val){
//     console.log("hi"+val);
// });


// Map
// var arr = [1,2,3,4,5,6];
// const newArr = arr.map(function(val){
//     return val*5;
// });
// console.log("Old Array: "+arr);
// console.log("New Array: "+newArr);


// Filter
// var arr = [1,2,3,-1,-3,0.21,3.5, 4,5,0,-10,"Hello",true];
// const newArr = arr.filter(function(val){
//     return val>=3;
// });
// console.log(newArr);


// Find--- returns 1st find element
// var arr=[1,2,4,4,5,6];
// const newArr = arr.find(function(val){
//     if(val == 4) return val;
// });
// console.log(newArr);


// indexOf
// var arr=[1,2,3,4];
// console.log(arr.indexOf(4));


// Objects --- key value pairs
// var obj = {
//     Name: "Pavan",
//     age: 21
// }
// We cannot change the value so freeze it.
// Object.freeze(obj);

// obj.age=22;
// console.log(obj.age);
// Two ways to access object members
// console.log(obj.Name);
// console.log(obj['Name']);



// functions 
// we can find the length of the function using fun_name.length which will gives length based on number of arguments.
// function add(a,b){

// }
// console.log(add.length);
 
// function add(){
//     return 14+6;
// }
// const ans = add();
// console.log(ans);

// async coding
async function abcd(){
    var blob = await fetch(`https://randomuser.me/api/`);
    var ans = await blob.json();

    console.log(ans);
}
abcd();