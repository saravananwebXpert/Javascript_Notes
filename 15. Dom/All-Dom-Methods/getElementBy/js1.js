//ByIdName
let myId=document.getElementById("myId");
console.log(myId);

//ByClassName:[html collection]
let myclass= document.getElementsByClassName("myclass");
console.log(myclass);
myclass[3].style.background="red";

//ByTagName:[html collection]
let tag=document.getElementsByTagName("h1");
tag[1].style.background="aqua";
console.log(tag)

//querySelector:If we give same class/id/tag names for different elements,it selects the first element
let query=document.querySelector(".myclass");
console.log(query);
let query1=document.querySelector("#myId");
console.log(query1);
let query2=document.querySelector("h1");
query2.style.color="pink"
console.log(query2);

//querySelectorAll:[NodeList]
let queryAll=document.querySelectorAll("h1");
queryAll[0].style.background="green"
console.log(queryAll);

let queryAll1=document.querySelectorAll(".queryAllCls");
queryAll1[1].style.background="yellow";





