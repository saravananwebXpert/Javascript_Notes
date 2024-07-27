// //DOM
// console.log("start");
// let e1 = document.querySelector('.divstyle1')
// console.log(e1);
// let elements =document.querySelectorAll(".divstyle1")
// console.log(elements);
// let e3 = e1.querySelectorAll(".div")
// console.log(e3);
// console.log("end");


//ex
// //Obtain the reference of div tag using id 'd1', using query selector
//  let e4 = document.querySelector("#d1");
//  console.log(e4);
// //Obtain the reference of the second div  whose class name is divstyle1
// let e5 = document.querySelectorAll(".divstyle1")
// console.log(e5[1]);
// //Obtain reference of all the elements in the DOM
// let e6 = document.querySelectorAll("*");
// console.log(e6);

// // to get 5th element
// console.log(document.querySelectorAll("*")[4]);

// let e7 = document.querySelector("#d1 p")
// console.log(e7.textContent);
// let e8 = document.querySelectorAll("#d1 p")[1];
// console.log(e8.textContent);
// let e9=e8.textContent="age : 26"
// console.log(e9);

//  let e10 = document.querySelectorAll("#d2 ol li")[0]
// console.log(e10.textContent);























// dom properties
let d = document.getElementById("d1");
// console.log(d.firstChild);
// console.log(d.firstElementChild);
// console.log(d.lastChild);
// console.log(d.lastElementChild);
let n2 = d.nextSibling;
console.log(n2)
// let n3 = d.nextElementSibling;
// console.log(n3)

// let h = document.getElementById("d1");
// console.log(h.children);
// console.log(h.children[0]);
// or
let h1 = document.getElementById("d1").firstElementChild;
// console.log(h1);
// console.log(parentElement);//div
// console.log(parentElement.childNodes) //div's ChildNodes
// console.log(h1.parentElement.children);//siblings

// let ns = h1.parentElement.children.length-1;
// console.log(ns);//2,no of siblings of h2

//createanelemntobject
// var para = document.createElement("p");
// // //appendchild
// document.body.appendChild(para);
// // console.log(para);
// // console.log(document.querySelectorAll("body *"));

// // //toaddtext
// para.textContent = "this is web technology class";

// // //to giveid
// para.id = "para1";
// console.log(para);

// // //togive class
// para.className = "para";
// console.log(para);


