   document.body.style.fontSize ="30px";

  console.log(document.body
      .firstElementChild
  )
  console.log(document.body.lastElementChild.previousElementSibling)

   console.log("hii");
   console.warn("hii");
   console.error("hii");
   console.assert(444>555);
   console.clear()

   let a = prompt("enter the title");
   document.title = a;

   let a = document.getElementsByClassName("navbar");
   a.style.backgroundColor = "green";

   let a = document.getElementById("about");
   let b = document.getElementsByClassName("navbar");
   b[0].style.backgroundColor = "blue";
   b[1].style.color = "red";

   let c = document.getElementsByTagName("nav");
   c[0].style.color = "yellow";

   let d = document.querySelectorAll(".navbar");
   d[0].style.color = "yellow";
   let d = document.querySelector(".navbar");
   d.style.color = "yellow";

   console.log(document.getElementsByName("search"));

   let a = document.getElementById("home");
   console.log(a.matches(".navbar"))
   let a = document.getElementById("home");
   let b = document.getElementById("sp");
    console.log(a.matches(".item"));
    console.log(sp.closest(".item"))
   console.log(a.contains(a))

   let a = prompt("enter the age");
   if(Number.parseInt(a)>18){
       alert("yes");
   }
   else{
       alert("no");
   }
   let b = confirm("Do you want to see the prompt again");
   if(b==true){
       prompt("enter again");
   }
   else{
       alert("Thank you");
   }

   let a = prompt("enter the color");
   document.body.style.backgroundColor = a;

   document.getElementsByTagName("li")[0].style.backgroundColor = "purple";
   document.getElementsByTagName("li")[1].style.backgroundColor = "purple";
   document.getElementsByTagName("li")[2].style.backgroundColor = "purple";
   document.getElementsByTagName("li")[3].style.backgroundColorb = "purple";

   let a = prompt("Enter");
   document.body.style.backgroundColor = a;

   console.log(document.body.previousElementSibling)

   let a  = prompt("Enter the title");
   document.title = a;
   let b = prompt("Enter the color");
   document.body.style.backgroundImage = "url('isro wallpaper.jpg')";
   document.body.style.backgroundSize = "cover";
   document.body.style.backgroundRepeat = "no-repeat";
   document.body.style.backgroundPosition = "center";

   let navlink = document.getElementById("p");
    navlink.href =  'https:www.wikipedia.org';
   navlink.textContent =  'https:www..org';
   navlink.title = "hello";
   console.log(navlink.nodeType);
   navlink.style.fontSize = "32px"
   navlink.style.fontFamily = "cursive"
   navlink.style.border = " 2px solid black"
   navlink.style.color = "blue"
   navlink.style.padding = "200px"
   Select element by ID
   let mainDiv = document.getElementById("main");
   console.log(mainDiv);   <div id="main">Main Content</div>

    Check if element exists
   if (mainDiv) {
       console.log("Element found!");
       console.log(mainDiv.textContent);
       console.log(mainDiv.nodeName)   "Main Content"
       console.log(mainDiv.nodeType)   "Main Content"
       console.log(mainDiv.nodeValue)   "Main Content"
   }

    ID is unique - only returns first match
   let sidebar = document.getElementById("sidebar");
   console.log(sidebar.id);   "sidebar"

   let a = document.getElementById("btn");
   a.addEventListener('click',()=>{
       let d = prompt("Enter the color");
       document.body.style.backgroundColor = d;
   })

   s = "hello";
   console.log(s.slice(-2));

   let a = setInterval(function() {
       console.log("hello");
   }, 2000);
   setTimeout(() => {
       clearInterval(a);
   }, 30000);

   let a = setInterval(() =>{
       console.log("hello");
   } , 1000);

   setTimeout(() => {
       clearInterval(a);
   }, 10000);

   let mul = (a,b) =>{
       alert(a*b);
   }

   let a  = document.getElementsByTagName("button")[0]
    let x  = () =>{
       document.title = "sakhii"
   }

   a.addEventListener("click" , x)

   a.removeEventListener("click" , x)

  let red = document.getElementsByTagName("button")[0]
  let purple = document.getElementsByTagName("button")[1]
  let orange = document.getElementsByTagName("button")[2]
  let green = document.getElementsByTagName("button")[3]
  let blue = document.getElementsByTagName("button")[4]

  let r =() =>{
      document.body.style.backgroundColor = "red";
  }
  let p =() =>{
      document.body.style.backgroundColor = "purple";
  }
  let o =() =>{
      document.body.style.backgroundColor = "orange";
  }
  let g =() =>{
      document.body.style.backgroundColor = "green";
  }
  let b =() =>{
      document.body.style.backgroundColor = "blue";
  }

  red.addEventListener("click" , r);
  purple.addEventListener("click" , p);
  orange.addEventListener("click" , o);
  green.addEventListener("click" , g);
  blue.addEventListener("click" , b);


 let a = document.getElementById("night");

 let x = () =>{
     a.classList.toggle("night");
     if( a.classList.contains("night")==true){
         document.body.style.backgroundColor = "black";
         document.getElementById("id").innerText = "night"
         document.body.style.color = "white"
         a.style.border = "5px solid red"
     }
     else{
         document.body.style.backgroundColor = "pink";
         document.getElementById("id").innerText = "day"
         a.style.border = "5px solid blue"
         document.body.style.color = "black"

     }
 }
 a.addEventListener("click" , x);

  let a  = prompt("Enter:")
  document.body.style.backgroundColor = a


