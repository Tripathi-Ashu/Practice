// // function handleClick() {
// //     const element = document.getElementById('first');
// //     element.textContent = 'Strike is coming';
// // };


// // This will not use  becouse over  writhe the value  
// // const element  = document.getElementById('first');

// // element.onclick = function handleClick() {
// //     element.textContent = "Stick is comming"
// // }; // onclick property hai eske ander ye function dal do 

// // element.onclick = function handleClick() {
// //     element.textContent = "Im the best ";
// // };

// // element.addEventListener('click', () => {
// //     element.textContent= "Im coming omoro ";

// // });

// // element.addEventListener('click', () => {
// //     element.style.backgroundColor ='pink';

// // }); // Method 


// // let a = {
    
// //     greet:  function (value) {
// //         console.log("Hello" , value);
// //     }
// // };

// // a.greet(10);
// // a.greet(20);


const child1 =  document.getElementById('child1');
child1.addEventListener('click' ,  () => {
    child1.textContent = "I am clicked";
    child1.parentElement.parentElement.style.backgroundColor = document.getElementById(child1).style.backgroundColor();
});

const parent = document.getElementById('parent');
console.log(parent.children);

for(let child of parent.children){
    child.addEventListener('click' , () =>{
        child.textContent = "I am ashutosh tripathi ";
    })
};


// optimize approach --> bubbling 

const granparant = document.getElementById( )