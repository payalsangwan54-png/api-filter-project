// let p = document.getElementById("hello");
// console.log(p);
// let body =document.querySelector('body');
// p.addEventListener('click',()=>{
//     p.style.color = 'red';
//     p.style.fontsize="25px"

//     body.style.backgroundcolor ='yellow';
//     body.style.height='100vh';
// })
 let r=document.getElementById("red");
let g=document.getElementById("green");
let body =document.querySelector('body');

r.addEventListener('click',()=>{
    body.style.background="red";
    body.style.height ="100vh"
})
g.addEventListener('click',()=>{
    body.style.background="green";
    body.style.height ="100vh"
})