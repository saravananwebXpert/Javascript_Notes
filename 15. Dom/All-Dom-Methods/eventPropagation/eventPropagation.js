//Event listeners
//to add eventListener for the button

//step 1: get the address of target element

let b1 = document.getElementById("btn");

// // //step 2:design event handler
// b1.addEventListener("click", eventHandle);
// function eventHandle(e) {
//   //e-->eventObject address
//   //task to be performed when event occurs
//   console.log("clicked");
//   console.log(typeof e);
//   console.log(e.type);
//   //gives event type(a1)
//   console.log(e.eventPhase);
//   //on which element the event is targeted
//   console.log(e.eventPhase);
//   //2,it is in the target phase
//   b1.style.background = "purple";
// }
//step 3:add event handler to the target element
// a1-->event type
// a2-->pass event handler
// a3-->optional
// b1.addEventListener(a1, a2, a3);

// ex
// let d2 = document.getElementById("myDiv");
// function onHover(m) {
//     console.log(m)
//     d2.style.backgroundColor="yellow";
//     d2.style.margin="auto";
//     console.log(m.type);
// }

// d2.addEventListener("mouseover",onHover)
// //get back to same order
// function offHover(n){
//     d2.style.backgroundColor="white";
//     d2.style.marginLeft="0px";
//     console.log(n.type);
// }
// d2.addEventListener("mouseout",offHover);

/* **************************************** */

//understanding event propagation using nested event
// let gp = document.getElementById("grandParent");
// let p = document.getElementById("parent");
// let c = document.getElementById("child");

// gp.addEventListener("click", e => {
//   console.log(e);
//   console.log("grand parent clicked");
//   gp.style.background = "red";
//   console.log(`Phase: ${e.eventPhase}`);
// });

// p.addEventListener("click", e => {
//   console.log("parent clicked");
//   p.style.background = "blue";
//   // e.stopPropagation();
//   console.log(`Phase: ${e.eventPhase}`);
// });

// c.addEventListener("click", e => {
//   console.log("child clicked");
//   c.style.background = "green";
//   console.log(`Phase: ${e.eventPhase}`);
//   console.log(e);
// });

// c.addEventListener("mouseover",()=>{
//   c.style.backgroundColor = "red";
//   console.log("childern over")
// },)

// p.addEventListener("mouseover",()=>{
//   p.style.backgroundColor = "yellow";
//   console.log("parenthover");
// },)

// gp.addEventListener("mouseover",()=>{
//   gp.style.backgroundColor = "green";
//   console.log("grandparenthover");

// },)
