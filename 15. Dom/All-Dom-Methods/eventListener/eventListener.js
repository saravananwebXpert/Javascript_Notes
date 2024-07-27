// function displayBg(){
//     document.body.style.background="red";
//     let h1=document.createElement("h1");
//     console.log(h1);
//     h1.textContent="I am a click event listener";
//     document.body.append(h1);
// }

// function animals(){

// let ul=document.createElement("ul");
// ul.textContent="Animals:";
// ul.style.background="orange";

// let li1=document.createElement("li");
// li1.textContent="Tiger";
// li1.style.backgroundColor="red";

// let li2=document.createElement("li");
// li2.textContent="Lion";

// let li3=document.createElement("li");
// li3.textContent="Zebra";

// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);
// document.body.append(ul);
// }

// let btn = document.getElementById("myPan");
// btn.addEventListener("click", () => {
//   let div = document.createElement("div");
//   div.className = "myPanCard";
//   div.style.background = "grey";
//   let h3 = document.createElement("h3");
//   h3.textContent = "Name : James";
//   h3.className = "h3style";
//   let h3a = document.createElement("h3");
//   h3a.textContent = "city:Banglore";
//   div.appendChild(h3);
//   div.appendChild(h3a);
//   let body=document.body;
//   body.appendChild(div);
//   document.body.append(div);
// });

// ex2

// let btn=document.getElementById("btn");
// btn.onclick=function(){
// let input1=document.getElementById("n1").value;
// let input2=document.getElementById("n2").value;
// let sum= Number(input1)+Number(input2);
// let div=document.getElementById("result");
// div.innerHTML="result is ="+ sum;
// }

// function change() {
//     let select = document.getElementById("abc").value;
//   document.getElementById("res").innerHTML = "Your city is =" + select;
// }

// function display() {
//   let val = document.getElementById("clr").value;
//   console.log(val);
//   document.body.style.background = val;
// }

// function display(){
// let val = document.getElementById("clr").value
//     if(val == "red" || val == "blue" || val == "green"){
//         document.body.style.background=val;
//     }
//     else
//         document.body.style.background="white";
// }

function onHover(){
    let div = document.getElementById("text");
    div.className="addStyle";
}
function mouseOut(){
    let div = document.getElementById("text");
    div.className = "removeStyle";
    console.log(div)
}

// onKeyDown
// let input = document.getElementById("key");
// input.onkeydown = function () {
//   console.log("triggered");
//   document.write("I am keyDown event");
// };

let input2 = document.getElementById("key");
input2.onkeyup = function () {
  console.log("Not triggered");
};
