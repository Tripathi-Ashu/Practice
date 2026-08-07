// const newElement = document.createElement("h2");
// console.log(newElement);
// newElement.textContent = "My name is ahutosh";
// newElement.id = 'Second';
// console.log(newElement);

// // select element 
// const element = document.getElementById('first');
// element.after(newElement);
// element.before(newElement);

// const newElement2 = document.createElement('h3');
// newElement2.textContent = 'Diwali a rhi hai ';
// newElement2.id = 'Thrd';

// newElement2.classList.add ("Ashutosh") // space are not nessery 
// newElement2.classList.add ("Tripathi")


// newElement2.style.backgroundColor ='Pink';
// newElement2.style.fontSize = "30px";

// newElement2.setAttribute('Hello' , 'jii');


// element.before(newElement2);
// console.log(newElement2);

// console.log(newElement2.getAttribute('Hello'));

// const list  = document.createElement('li');
// list.textContent = 'Milk';
// const list2  = document.createElement('li');
// list2.textContent = 'dudh ';

// const list3 = document.createElement('li');
// list3.textContent = 'halwa';

// const list4 = document.createElement('li');
// list4.textContent = 'pani puri';

// const unorder = document.getElementById('Listing');
// unorder.append(list , list2);

// unorder.prepend(list3);

// // list.after(list4)

// console.log(unorder.children);

// unorder.children[2].after(list4);


// Use of this 
// const arr = ["Milk" , "Papa", "Dady" , "pipi" , "AShutosh" , "Tripathi"];

// const unorderElement = document.getElementById('Listing');

// for(let food of arr) {
//     const list = document.createElement("li");
//     list.textContent = food;
//     unorderElement.append(list);
// };

// // optimize way 

// const unorderElement = document.getElementById('Listing');
// const fragment = document.createDocumentFragment();

// for(let food of arr) {
//     const list = document.createElement("li");
//     list.textContent = food;
//     fragment.append(list);

// };

// unorderElement.append(fragment);

// const s1 = document.getElementById('first');
// s1.remove();

// const month  = document.getElementById('ten');

// const lister = document.createElement('li');
// lister.textContent= "Hello";

// month.insertAdjacentElement('afterbegin', lister);



/// Never use innerHTMl = ;

console.log("AShutosh Tripathi");

const button1 = document.getElementById('button1');
console.log(button1);
button1.addEventListener('click' , () => {
    console.log("Button 1 is clicked ");
});

const button2 = document.getElementById('button2');
button2.addEventListener('click' , ()=>{
    console.log('Bitton 2 is click');
});

const button3 = document.getElementById('button3');
button3.addEventListener('click' ,()=> {
    console.log('Cutton 3 is cicked')
});

console.log(' I am the End ');
