

// function vhnagetext(){
//     console.log(Event);
//     let fpara=document.getElementById("fpara");
//     fpara.textContent="hi world"

// }
// let fpara=document.getElementById("fpara");
// fpara.addEventListener("click",vhnagetext,true);

// let anchor = document.getElementById('link');
// anchor.addEventListener('click',function(event){
//     console.log(event);
//     event.preventDefault();
//     anchor.textContent="click done";
// });

// let paras= document.querySelectorAll('p');

// function alertpara(){
//     alert("clicked para "+ event.target.textContent);
// }
// for (let i=0;i<paras.length;i++){
//     let para = paras[i];
//     para.addEventListener('click',alertpara)
// }

// let mydiv=document.getElementById("wrapper");
// document.addEventListener("click",alertpara);
// let firstpromise = new Promise((resolve,reject)=>{
//     setTimeout(function myname(){
//     console.log("my name");
// },10000);
// resolve(1);
// });

//  
// async function getData() {
//     setTimeout(function(){
//         console.log("I am inside set Timeout block")
//     },4000);
// }
// getData();
// async function getData() {
//     //get request -async
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     //parse json - ye bhi async hai
//     response.then((message)=>{
//         console.log(response);
//     })
    
//     let data = await response.json();
//     console.log(data);
// }
//prepare url --> sync
// fetch data  --> async
// process data  -->sync
// getData();

const myheader = new Headers();
myheader.append("Content-Type","application/json");
const myreq = 'https://jsonplaceholder.typicode.com/posts'
const options={
    method:"POST",
    body:JSON.stringify({username: "examanuragple"}),
    headers: myheader,
}
async function getData() {
    const response = await fetch(myreq);
    let data= await response.json();
    console.log("get data response",data);
}
async function postdata() {
    const response= await fetch(myreq,options);
    let data=await response.json();
    console.log("mydata --> ",data);
}
async function processdata() {
    await postdata();
    await getData();
    
}
processdata();