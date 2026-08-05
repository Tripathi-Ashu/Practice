// // // function handleClick() {
// // //     const element = document.getElementById('first');
// // //     element.textContent = 'Strike is coming';
// // // };


// // // This will not use  becouse over  writhe the value  
// // // const element  = document.getElementById('first');

// // // element.onclick = function handleClick() {
// // //     element.textContent = "Stick is comming"
// // // }; // onclick property hai eske ander ye function dal do 

// // // element.onclick = function handleClick() {
// // //     element.textContent = "Im the best ";
// // // };

// // // element.addEventListener('click', () => {
// // //     element.textContent= "Im coming omoro ";

// // // });

// // // element.addEventListener('click', () => {
// // //     element.style.backgroundColor ='pink';

// // // }); // Method 


// // // let a = {
    
// // //     greet:  function (value) {
// // //         console.log("Hello" , value);
// // //     }
// // // };

// // // a.greet(10);
// // // a.greet(20);


// const child1 =  document.getElementById('child1');
// child1.addEventListener('click' ,  () => {
//     child1.textContent = "I am clicked";
//     child1.parentElement.parentElement.style.backgroundColor = document.getElementById(child1).style.backgroundColor();
// });

const parent = document.getElementById('parent');
parent.addEventListener('click' ,(e) => {
    e.target.textContent = "I am clicked";
})
console.log(parent.children);

// for(let child of parent.children){
//     child.addEventListener('click' , () =>{
//         child.textContent = "I am ashutosh tripathi ";
//     })
// };


// optimize approach --> bubbling 

// const granparant = document.getElementById("grandparent");
// grandparent.addEventListener('click', () => {
//     console.log('Grand parent is clicked');
// }, true);

// const parent = document.getElementById('parent');
// parent.addEventListener('click', (e) => {
//     console.log(e); // object of 
//     console.log('Parameter is clicked ');
// }, true);

// const child = document.getElementById('child');
// child.addEventListener('click'  , (e) => {
//     // e.stopPropagation();
//     console.log('Child is clicked ');
//     console.log(e.target);
// }, true)

// capta phase  on hai  : top se niche pe evenet ko tigger kr diya jayega 
// off haii evenet hai usko dono to up bubbling phase bolte hai , tab trigger kiya jayega  
// target phase 
// bubuling phase 
