// let listTitle = document.getElementById('listTitle');
// console.log(listTitle);

// let listTitle = document.querySelector('ul li');
// console.log(listTitle);

// let test = document.getElementsByTagName('li')[2];
// console.log(test);

// listTitle.style.color = 'red';

// let grocery = document.getElementsByClassName('groceryItem');
// console.log(grocery);

// let listTag = document.getElementsByTagName('li');
// console.log(listTag);

// for (tag of listTag){
//     tag.style.fontFamily = 'cursive';
// }

// document.getElementsByClassName('listItem')[4].innerText = 'Buy frozen peas and carrots';
// let b = document.getElementById('clickMe');
document.getElementById('clickMe').addEventListener('click', (event) => {
    console.log(event);
    console.log(event.target);
    event.target.style.backgroundColor = 'lightblue'
});
// console.log(b);