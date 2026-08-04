const itemList = document.getElementById('item-list');

const parentContainer = itemList.parentElement; // div 

const listChildren = itemList.children;

const firstLi = itemList.firstElementChild;

const lastLi =  itemList.lastElementChild;

const specialLi = document.querySelector('.special');

const nextItem = specialLi.nextElementSibling;

const prevItem = specialLi.previousElementSibling;



const itemList = document.getElementById('item-list');

const parentContainer = itemList.parentElement; // The #main-container div
const listChildren = itemList.children; // An HTMLCollection of the 3 <li> elements
const firstLi = itemList.firstElementChild; // The first <li>
const lastLi = itemList.lastElementChild; // The last <li>

const specialLi = document.querySelector('.special');
const nextItem = specialLi.nextElementSibling; // The 3rd <li>
const prevItem = specialLi.previousElementSibling; // The 1st <li>
