// {/* <script>
// //1.  ways to print in javascript
// // alert("me");
// // document.write("javascript");
// // document.getElementById("click").innerHTML = "click me now";
// // document.getElementById("click").style.color = "red";
// // document.getElementById("click").style.fontSize = "30px";

// // 2. javascript console API

// console.log("hello world",5+3);
// console.warn("this is warning");
// console.error("this is error");
// </script> */}

// 3. javascript variables
// container to store 

var num1 = 3;
var num2 = 5;
console.log(num1+num2);

// 4. data types
// number, string, boolean, null, undefined, object, array, symbol

var str1 = "this is a string";
var str2 = "this is also a string";
console.log(str1.length);
console.log(str1+str2);

var marks = {
    "ram": 90,
    "shyam": 85,
    "hari": 95
}
console.log(marks)

var arr = [12,32,4,5,63]
console.log(arr)

// 5. functions in javascript
function avg(a,b){
    return (a+b)/2;
}
c1 = avg(4,6);
console.log(c1);

// 6. conditionals in javascript
// var age = 34;
// if(age>8){
//     console.log("you are not a kid");
// }
// else{
//     console.log("you are a kid");
// }

// 7. loops in javascript
// var arr = [1,2,3,4,5,6,7];
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element);
// });

let j = 0;
const ac = 0;
do{
    console.log(j+1);
    j += 1;
}while(j<10);

// 8. array methods
let myarr = ["fan","camera",34,null,true];
// myarr.pop();
// myarr.push("harry");
// myarr.shift();
// const newLen = myarr.unshift("harry");
// console.log(newLen);
// console.log(myarr);

// 9. string methods in javascript
let mystring
// let mystring
// console.log(mystring.length);
// console.log(mystring.indexOf("is"));
// console.log(mystring.slice(1,4));
// d = mystring.replace("is","are");
// console.log(d, mystring);

// 10. date methods in javascript
let myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());

// 11. dom manipulation
let elem = document.getElementById('click');
console.log(elem);

let elemClass = document.getElementsByClassName("container");
console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");
console.log(elem.innerHTML);
console.log(elem.innerText);

tn = document.getElementsByTagName('div');
console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText = "this is a created paragraph";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "this is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); --> removes an element

// 12. user input
function clicked(){
    console.log("the button was clicked");
}
window.onload = function(){
    console.log("the document was loaded");
}

let num1 = prompt("enter a number");
let num2 = prompt("enter a number");
console.log(num1+num2);

// select using query
// sel = document.querySelector('.container');
// console.log(sel);
// sel = document.querySelectorAll('.container');
// console.log(sel);

// 13. events in javascript
// firstcontainer.addEventListener('click', function(){
//     console.log("click on container");
// })
// firstcontainer.addEventListener('mouseover', function(){
//     console.log("mouse on container");
// // })
// firstcontainer.addEventListener('mouseout', function(){
//     console.log("mouse out of container");
// })
let prevHTML = document.querySelectorAll('container')[0].innerHTML;
firstcontainer.addEventListener('mouseup', function(){
    document.querySelectorAll('container')[0].innerHTML = prevHTML;
    console.log("mouse up when clicked on container");
})
firstcontainer.addEventListener('mousedown', function(){
    document.querySelectorAll('container')[0].innerHTML = "<b>we have clicked</b>";
    console.log("mouse down when clicked on container");
})  
// arrow functions
// function summ(a,b){
//     return a+b;
summ = (a,b)=>{
    return a+b;
}
logkaro = ()=>{
    document.querySelectorAll('container')[0].innerHTML = "<b>set interval fired</b>";
    console.log("i am your log");
}
// serTimeout and setInterval
// clr = setTimeout(logkaro, 2000);
// clr = setInterval(logkaro, 2000);
// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout

// 14. local storage
// localStorage.setItem('name','harry');
// localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear();

//JSON
// obj = {name: "harry", length: 1, a: {this: "that"}}
// jso = JSON.stringify(obj);
// console.log(typeof jso);
// console.log(jso);
parsed = JSON.parse({name: "harry", length: 1, a: {this: "that"}})
console.log(parsed)

// 15. template literals
a = 34;
console.log(`this is my ${a}`)
// 16. spread or rest operator
