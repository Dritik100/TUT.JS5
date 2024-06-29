// let btn=document.querySelector("button");
// console.dir(btn);

// // btn.onclick=function(){
// //     console.log("Button was clicked");
// //     alert("Button was clicked");
// // };

// function sayHello(){
//     alert("Hello!");
// }
// btn.onclick=sayHello;  
// let btns=document.querySelectorAll("button");
// for(btn of btns){
//     btn.onclick=sayHello;
    
// }
// function sayHello(){
//     alert("Hello");
// }

// let btns=document.querySelectorAll("button");
// for(btn of btns){
//     btn.onclick=sayHello;
//     btn.onmouseenter=function(){
//         console.log("you eneterd a button");
//     };
    
// }
// function sayHello(){
//     alert("Hello");
// }

let btns=document.querySelectorAll("buttons");
for(btn of btns){
    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayName);
    
}
function sayHello(){
    alert("Hello");
}
function sayName(){
    alert("apna college");
}