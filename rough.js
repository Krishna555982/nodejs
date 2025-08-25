// const x = 200
// console.log(x)
// let x = 100
// x = 200
// console.log(x)
// const name = "krishna"
// name = "naveen"
// console.log(name)

// const { resourceLimits } = require("worker_threads");


// let car = { 
//     name: "BMW",
//     bio: {
//         age: 32
//     }
// }
// console.log(car.name)
// console.log(car.bio.age)

// let data = {
//     Full Name: "Krishna Murthy"
// }
// console.log(data["Full Name"])

// const input = "name"
// const data = {  
//     name: "Krishna"
// }
// console.log(data[input])

// var x = 100
// y =  x
// console.log(y)
// const obj = {
//     age: 24,
//     name: "Krishna"
// }

// const obj2 = {...obj}  //shallow copy
// const obj3 = obj  // Deep Copy
// obj.age = 25
// obj.tech = "nodejs"
// console.log(Object.values(obj));
// console.log(obj2)
// console.log(obj3) 
// delete obj.age
// console.log(obj)

// let a = 5
// a++ 2
// console.log(a)

// let a = 10
// let b = 20
// if (a>b & b<a & b===a)
// {
// console.log("Success")
// }
// else {
//     console.log("Fail")
// }

// console.log(typeof (a))
// const arr1 =  [1,2,3,4,5,6]
// const arr2 = [7.8,9,10,11]
// arr.pop()

// arr.push(13)
// arr.unshift(100)
// arr.shift()
// const arrays = arr1.concat(arr2)
// console.log(arrays)
//
// for( i=0; i<=arr.length; i++)
//     {
//     console.log(i)
//     }
// arr.forEach(element => {
//     console.log(element)
// })
//
// arr.forEach((element,index)=>{
//     if (element == 5) {
//         delete arr[index]
//     }
//         console.log(element,index)
// })
// //
// for(let number of arr){
// console.log(numer);
// }
//
// const numberArr = [1,2,3,4,5,6,7,8,9,10]
// let a = numberArr.map(value=>{
// return value*2;
// })
// console.log(a)
//
// const objarr = [{name: 'naven', tech: "nodejs"},{name: 'Krishna', tech: "java"}]
// objarr.forEach(value=>{
//     if(value.name == "naven")
// console.log(value);
// })
//
// let numbers = [1,2,3,4,5,6,7,8]
//
// console.log(numbers.indexOf(1));
//
// const data = [{name:'Krishna', tech:"java"},{name:'Naven', tech:"node.js"}]
// let value = data.find(ele=>ele.name = 'Krishna')
// console.log(value)
// const numbers = [1,2,3,4,5,6]
// console.log(numbers.includes(!4))
//
// const number = [5,2,6,8,2,1]
// console.log(number.sort())
// let name = 'wow'
// let name1 = name.split("")
// console.log(name1)
// let name2 = name1.reverse()
// name2.forEach (element => {
//     console.log(name2)
// })
//
// function greetings (name,age) // function name and parameter
// {
//     return "hello "+ name+" My age is "+age
// }
// console.log(greetings("Krishna",24))
// console.log(greetings("Naveen",25))  //function calling statement
// const greetings = function(name,age) {
//     return "Hello "+name+ " my age is "+age
// }
// console.log(greetings("Naven",25))
// function () {
//
// }
// const greetings2 = function(name) {
//     return"Hello "+name
// }
// module.exports = {greetings2}
//
// exports.greetings = function(name) {
//     return "Hello " +name
// }
//
// console.log("one")
// setTimeout(() => {
// console.log("two");
// }, 0);
// console.log("three")
//
// setInterval(()=>{
//
// })
//
// callbackhell
//
// fs.readfile("file.txt", 'utf-8', (err, data))
// if(err) {
//     console.log(err);
//     return "File not found";
// }
// fs.writefile ("file.txt", data + "Hello World", (err))
// if(err) {
//     console.log(err);
//     return "File not found";
// }
// else {
//     console.log("File updated successfully");
// }
//
// // Promises
// const fs = require('fs');
// fs.readFile("file.txt", 'utf-8').then((data) => {
//     fs.writeFile("file.txt", copy.txt, data.then(() => {
//         console.log("File updated successfully");
//     }))
// })
//
// promise.all
//
// const promise1 = Promise.resolve(10);
//
// const promise2 = Promise.resolve(20);
//
// const promise3 =  Promise.reject(30);
//
// Promise.all([promise1, promise2, promise3])
// .then((values) => {
//     console.log(values); 
// })
// .catch((error) => {
//     console.error("Error:", error); 
// })
//
// Promise.allSettled([promise1, promise2, promise3])
//
// const promise1 = Promise.resolve("Krishna")
// const promise2 = Promise.reject("Rahul")
// Promise.allSettled([promise1, promise2])
// .then (results => {
//     results.forEach((result) => {
//         if (result.status === "fulfilled") {
//             console.log("Fulfilled:", result.value);
//         } else {
//             console.log("Rejected:", result.reason);
//         }
//     });
// })
//
//Promise.race
//
// const promise1 =  Promise.reject("Krishna");
// const promise2 = Promise.resolve("Rahul");
// Promise.race([promise1, promise2])
// .then(result => {
//     console.log("First fulfilled promise:", result);
// })
// .catch(error => {
//     console.log("First rejected promise:", error);
// })
//
// Promise.any
//
// const promise1 = Promise.reject("India");
// const promise2 = Promise.resolve("USA");
// Promise.any([promise1, promise2])
// .then(result => {
//     console.log("First fulfilled promise:", result)
// })
// .catch (error => {
//     console.log("All Promises Were Rejeced", error)
// })
//
// closure
//
// function outerfunction () {
//     let count = 0;   // Outer function variable
//     console.log(count);
//     function Innerfunction () {  //InerFunction
//         count++; 
//         console.log(count); 
//     }
//     return Innerfunction;
// }
// const myclosure = outerfunction();
// myclosure();
//
//
// callback functions
//
// function greetings (name, callback) {
//     console.log("Hello " + name)
//     callback()
// }
// function callme () {
//     console.log("I am callback function")
// }
// greetings("Krishna", callme) 
//
//febinocci series
// function febinocci (n) {
//     if (n <= 1) return [];
//     if (n === 1) return [0];
//     const arr = [0, 1];
//     for (let i = 2; i < n; i++) {
//         arr.push(arr[i - 1] + arr[i - 2]);
//     }
//     return arr;
// }
// console.log(febinocci(10));