//getElementById("idName");
let heading = document.getElementById("heading");
heading.style.backgroundColor = "green";
heading.style.color = "white";

//getElementsByClassName("className");
//changes applicable to only on of the child
let paras = document.getElementsByClassName("para");
console.log(paras);
paras[1].style.background = "yellow";
paras[1].style.color = "red";

//getElementsByTagName("i");
let tags = document.getElementsByTagName("i");
console.log(tags)
tags[2].style.fontWeight = "bold";
tags[2].style.color = "blue";

//querySelector("tagName")
let queryselect1 = document.querySelector("p");
queryselect1.style.textAlign = "center";
queryselect1.style.backgroundColor = "brown";
queryselect1.style.color = "white"

//querySelector("ClassName")
let queryselect2 = document.querySelector(".paras");
queryselect2.style.textAlign = "center";
queryselect2.style.backgroundColor = "violet";
queryselect2.style.color = "blue"

//querySelector("IdName")
let queryselect3 = document.querySelector("#spantag");
queryselect3.style.backgroundColor = "maroon";
queryselect3.style.color = "yellow"

//querySelectorAll("tagName")
let queryselect4 = document.querySelectorAll("h4");
console.log(queryselect4);
queryselect4[1].style.textAlign = "right";
queryselect4[1].style.backgroundColor = "brown";
queryselect4[1].style.color = "white"

//querySelectorAll("className")
let queryselect5 = document.querySelectorAll(".h5tags");
console.log(queryselect5);
queryselect5[2].style.textAlign = "right";
queryselect5[2].style.backgroundColor = "red";
queryselect5[2].style.color = "white"























