let student = {
    name: "Justin",
    awesome: false,
    degree: "JavaScript",
    week: 1
}
for (item in student){
    //console.log(item);
    console.log(student[item]);//this returns the value
}

let cats = ['tabby', 'british shorthair', 'burmese']
for (cat in cats){
    console.log(cat);
    console.log(cats[cat]);
}

//* CHALLENGE: write a for in loop that capitalizes the first letter of a name, and lower cases the rest of the name

let name = 'jUstiN AhmAnN';

// console.log(name[0].toUpperCase() + 
// name.slice(1).toLowerCase());

let capName;

for (let i in name) {
    if (i == 0){
        capName = name[i].toUppserCase();
    }
        else {
            capName += name[i].toLowerCase();
        }
    }

console.log(capName);