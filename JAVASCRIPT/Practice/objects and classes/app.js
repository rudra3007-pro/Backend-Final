// const student = {
//     fname: "rudra",
//     marks : 94.4,
//     printmarks:function(){
//         console.log("marks = " , this.marks);
//     },
// };

// let employee  ={
//     calckTax() {
//         console.log("tax");
//     },
// };

// const karan = {
//     salary: 3232323,
// };

// karan.__proto__ = employee;


// let student = {
//     mark(){
//         console.log("pass");
//     },
//     percentage(){
//         console.log("fsil");
//     }
// };

// let rudra = {
//     marks : 100,
// };


// class car {
//     constructor(){
//         console.log("hello");
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }

// }

// let xcent = new car();
// let hyundai = new car();

// class Emp {
//     constructor(){
//         console.log("hello");
//     }
//     name(){
//         console.log("name");
//     }
//     id(){
//         console.log(1);
//     }
//     city(){
//         console.log("city");
//     }
// };

// let name  = new Emp();
// let id  = new Emp();
// let city  = new Emp();

// karan.__proto = encodeURIComponent;

// console.log("hello");

// const URL = "https://isro.vercel.app/api/spacecrafts";
// const factpara = document.querySelector("#fact");
// const btn = document.querySelector("#btn");

// const hello = async () => {
//     console.log("Getting....");
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     factpara.innerText = data.spacecrafts[4].name;
// };

// btn.addEventListener("click", hello);



// let promise  = new Promise((resolve,reject) =>{
//     console.log("I am a promise");
//     reject(123);
// })

// function getData(dataId , getNext){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             // console.log("data" , dataId);
//             reject("error");
//             if(getNext){
//                 getNext();
//             }
//         }, 5000);
//     })  ;
// }
// getData(123)

// const get = () =>{
//     return new Promise((resolve,reject)=>{
//         console.log("promise");
//         // resolve("successfull");
//         reject('errr')
//     });
// }

// let promise = get();
// promise.catch((err) =>{
//     console.log("hello" , err);
// });

// function asyncFun(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("yes");
//             resolve("success");
//         }, 3000);
//     });
// }

// console.log("Executing");
// let p1 = asyncFun();
// p1.then((res)=>{
//     console.log(res);
// })

function gety = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("hello");
            resolve("success");
        }, 4000);
    })
}

let p1 = gety();
p1.then((res)=>{
    console.log(res);
})




