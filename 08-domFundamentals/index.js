//*TARGETING ONE ELEMENT IN THE DOM

let listTitle = document.getElementById('listTitle');
console.log(listTitle);

let listItem = document.querySelector('ul li');
console.log(listItem);

listTitle.style.textAlign = 'center';

listItem.style.color = 'red';

let grocery = document.getElementsByClassName('groceryItem');
console.log(grocery);//*returns an HTML collection, which is technically an array.

//* this means you can use sq bracket notation if you want to get really specific.

console.log(grocery[2]);//* here we have dug into the HTML collection and selected the third item in the list

let liTag = document.getElementsByTagName('li');
console.log(liTag);

let selectAll = document.querySelectorAll('ul li');
console.log(selectAll);//* this is called a node list

console.log(document.body.childNodes);

//*everything is an object, your whole HTML document is an object

let listDiv = document.getElementById('list')
console.log(listDiv.firstChild);

//* styling the li tag

for(tag of liTag){//*for each tag of this array
    tag.style.fontFamily = 'cursive';
}//*we've selected each item with the for of loop and changed them all to cursive

document.getElementsByClassName('listItem')[4].innerText = 'Buy a new cauldron'; //*selects the fifth one in the array of this CSS Class and changes the text


document.getElementsByClassName('groceryItem')[0].innerHTML = 'Moondew Drops'; //* does the same thing as above

//* EVENT LISTENER

document.getElementById('clickMe').addEventListener('click', (event) => {
    console.log(event)
    console.log(event.target)
    event.target.style.backgroundColor = 'lightBlue' //* target of the event
})

//* if you look at the console log in Chrome you see that it has created an object

document.getElementById('listInput').addEventListener('keyup', (event) => {
    console.log(event.target.value);
})//* this targets the value of the input field in real time as you input info into it.

//* APPEND CHILD METHOD

let newGrocery = document.createElement('li'); //* set a variable to this method - this will create a list item
let groceryList = document.getElementById('groceryList');//* this targets the ID on the page

groceryList.appendChild(newGrocery);
newGrocery.innerText = 'Ginger Root';


//* FOR SOME REASON THIS PART IS NOT WORKING FOR ME

let groceryTitle = document.createElement('h3'); //* the thing you want to create
let groceryDiv = document.getElementById('groceryDiv'); //* the thing you want to create
groceryDiv.appendChild('groceryTitle'); //* the element you are adding into it.
groceryTitle.innerText = 'Grocery List';

groceryDiv.insertBefore(groceryTitle, groceryDiv.childNodes[0]);