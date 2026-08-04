// getElementByID --->

const mainContainer = document.getElementById('main-container');
console.log(mainContainer);

mainContainer.style.border = '2px solid red';

const itemList = document.getElementById('item-list');
console.log(itemList);

// getElementByTagName ---> 

// select all tag name 
// return HTMLCollection 


const allParagraph = document.getElementsByTagName('p');
console.log(allParagraph.length);

// you can loop through the collection 
for (let i=0; i<allParagraph.length; i++) {
    allParagraph[i].style.fontStyle = 'italic';
}


// ClassName -- ->

const allItem = document.getElementsByClassName('item');
console.log(allItem.length);


const footerContainer = document.getElementsByClassName('container2')
console.log(footerContainer[0]);


// The Mordern , Powerfull Method ( The "Query"  Selector) 

// querySelector ==== Match the first css conditions 

const main = document.querySelector('#main-container'); //  id
const firstp = document.querySelector('p'); // tagName
const firstContsiner = document.querySelector('.container');


const specialItem = document.querySelector('.item.special');
console.log(specialItem);
specialItem.style.color = 'orange';

const usernameInput = document.querySelector('input[name = "username"]');

// queryselectorall  give the node list 

const allContainers = document.querySelectorAll('.container');
console.log(allContainers.length);

const listItems = document.querySelectorAll('#item-list li');

console.log(listItems);

listItems.forEach((item) => {
    item.computedStyleMap.fontWeirht = 'bold';
});