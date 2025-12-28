// let a =20;
// let b =("suraj");
// let c =null;
// let d =true;
// let e =false;
// let f =BigInt(20);
// let g =undefined;
// let h = Symbol("id");
// console.log(typeof(h))

// {var a = 10;
// console.log(a);
// {
//     var a=30;
//     console.log(a);
// }
// console.log(a);
// }

// {let a = 10;
// console.log(a);
// {
//     let a=30;
//     console.log(a);
// }
// console.log(a);
// }
// {
// const a = 10;
// console.log(a);
// {
//     const a=30;
//     console.log(a);
// }
// console.log(a);
// }

// const item = {
//     dairymilk:"20",
//     fivestar:"5",
//     perk:"5"
// }
// item["munch"] = "5";
// console.log(item["munch"])

// let a =10;
// let b=20;
// console.log("addition is",a+b)
// console.log("subtraction is",a-b)
// console.log("modulus is",a%b)
// console.log("division is",a/b)
// console.log("multiplication is",a*b)
// console.log("exponent is",a**b)
// console.log("increment of a is",a++)
// console.log(a)
// console.log("increment of b is",b++)
// console.log(b)
// console.log("decrement of a is",a--)
// console.log(a)
// console.log("decrement of b is",b--)
// console.log(b)

// let a="17";
// let b=20;
// let c = 90;
// console.log(a!==b);

// if(a>18){
//     console.log(true);
// }
// else{
//     console.log(false);
// }
// let a = 6;
//     // let b = prompt("Enter 2nd person age");
//     switch(a){
//         case 1: console.log(a)
//         break
//         case 2: console.log(a)
//         break
//         case 3: console.log(a)
//         break
//         case 4: console.log(a)
//         break
//         case 5: console.log(a)
//         break
//         case 6: console.log(a)
//         break
//         case 7: console.log(a)
//         break
//         case 8: console.log(a)
//         break
//         default:console.log("not in the range");
//     }

// const object = {
//     name:"Ayush",
//     roll_number:20,
//     gender:"male"
// }
// console.log(object["gender"])

// let a = prompt("1st number");
// let b = prompt("2nd number");
// if(a<b){
//     console.log("b is greater");
// }
// else if(a==b){
//     console.log("both are equal");
// }
// else{
//     console.log("a is greater");
// }

// for(let i =0;i<10;i++){
//     console.log(i);
// }
// let i=0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// let obj={
//     name:"Raja",
//     age:19,
//     gender:"male"
// }

// for(a in obj){
//     console.log(a +" " +obj[a]);
// }

// for( a of obj){
//     console.log(a);
// }

// obj();
// function obj(a,b){
//     let c = a+b;
//     return  c-Sub(a,b);
// }
// function Sub(a,b){
//     let d = b-a;
//     return d;
// }
// let a = 10;
// let b = 11;
// obj(a,b);
// console.log(obj(a,b));
// let a=10;
// let b=10;
// let c=10;
// let d=10;

// const avg =(a,b,c,d)=>{
//     let e = (a+b+c+d)/4;
//     return e;
// }
// console.log(avg(a,b,c,d));

// let a = prompt("Enter 1st number");
// let b = prompt("Enter 2nd number");
// let c = prompt("Enter operator");
// if(c=="+"){
//     console.log(add(a,b));
// }
// else if(c=="-"){
//     console.log(sub(a,b));
// }
// if(c=="*"){
//     console.log(mul(a,b));
// }
// if(c=="/"){
//     console.log(div(a,b));
// }

// function add(a,b){
//     let d = Number(a) + Number(b);
//     return d;
// }
// function sub(a,b){
//     let d = a-b;
//     return d;
// }
// function mul(a,b){
//     let d = a*b;
//     return d;
// }
// function div(a,b){
//     let d = a/b;
//     return d;
// }

// STRINGS

// Collection of characters
// let name = "rudra";
// // console.log(name.length);

// // let statement = name + " " + "is a good boy";
// let statement = `${name} is a krishn bhakt`;
// console.log(statement);

// let str = 'Nobita\'s friend is doraemon';
// OR 
// let str = "Nobita's friend is doraemon";
// let p = "100";
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.slice(2,22));
// console.log(str.length);
// console.log(str.replace("friend","best friend"));
// console.log(str.replace("iend","bend"));
// console.log(str.concat(" forever"));
// console.log(str.trim());
// console.log(str.startsWith("N"));
// console.log(str.endsWith("n"))
// console.log(typeof(p));
// console.log(typeof(Number.parseInt(p)));
// console.log(str[str.length-1]);


// const a = 10;
// a =20;
// console.log(a);

// let arr = [1,2,3,4,5,6,7];
// let arr2 = [213,4,14,34];
// let arr3 = arr2.toSorted();
// console.log(arr3);
// let arr4 = [1,2,3,4,5];
// let arr5 = arr4.concat(arr2);
// console.log(arr5);

// let str = "      Hello hi namaste";
// console.log(str);
// console.log(Number.parseInt(str));
// console.log(str.concat("  hello"));
// console.log(str.replace("hello","om"));


// let arr = [1,222,33,4,3,12,4];
// let arr2 = [7,8,9,10];
// let arr3 = arr.reverse();
// let arr4 = arr.sort();
// arr.pop(9);
// arr.push(100);
// delete arr[3];
// console.log(arr4);

// const compare = (a,b)=>{
//     return b-a;
// }
// let new_arr = arr.sort(compare);
// console.log(new_arr);

// let arr = [1,2,3,4,5,6];
// arr.splice(2,4,22,33,44,55);
// console.log(arr.join("   "));

// let arr = [1,2,3,4,5,6];
// arr.forEach((element,index) => {
//     console.log(element,index);
// });

// for(a of arr){
//     console.log(a);
// }

// let new_arr = arr.map((x)=>{
//     return x*x;
// });
// console.log(new_arr);

// let arr_new  = arr.reduce((x,y)=>{
//     return x+y;
// });
// console.log(arr_new)

// Array.from(a);
// console.log(a);

// document.getElementById("inp").innerHTML = "Hello heloo";

// let arr = [1,2,3,4,5,6,7,8,9];
// let new_arr = arr.reduce((x,y)=>{
//     return x*y;
// });
// console.log(new_arr);

// let arr = [1,2,3,4,5,6,7,8,9];
// let new_arr = Array.from("ayush is best");
// console.log(new_arr.toString());

// let arr = [1,2,3,4,5,6];
// let v = prompt("Enter the value: ");
// arr.unshift(v);
// console.log(arr);

// number = prompt("Enter the number:");
// number = Number.parseInt(number);
// let value = confirm("Do you want the square of the number:")
// if(value == true){
//     alert(number*number);
// }
// else{
//     alert("Not applicable");
// }


// console.cear(444>555);
// console.clear();

// let a  = prompt("Enter the color:");
// document.body.style.backgroundColor = a;
// document.title = a;

// const element = document.querySelector("button");
// console.log(element.nodeType);
// console.log(element.nodeName)

// console.log(document.body.parentElement)

// let a = document.getElementById("inp");







