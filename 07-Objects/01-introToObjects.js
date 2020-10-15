//* INTRO TO OBJECTS
//* curly brackets indicate an object is beinfg created

        // let demoArray = [1, 2, 3 [4, 5, 6]];
//* both of these are examples of structured data, that is to say well organized data, which can be very useful
        // console.log(demoArray[3][1]);


let netflix = {
    id: 1,
    name: "The Office",
    season1: {//*objects inside of objects denoted by nested curly brakcets
        seasonInfo: {
            episodeInfo: [{
                    episode: 1,
                    episodeName: "Pilot"
                },
                {
                    episode: 2,
                    episodeName: "Diversity Day"
                },
                {
                    episode: 3,
                    episodeName: "Health Care"
                },
                {
                    episode: 4,
                    episodeName: "The Alliance"
                },
                {
                    episode: 5,
                    episodeName: "Basketball"
                },
                {
                    episode: 6,
                    episodeName: "Hot Girl"
                },
            ]
        }
    },
    season2: {},
    season3: {}
};

console.log(netflix);//* this is all of the object
console.log(netflix.name);//* just the show name
console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName);//*this is an episode name

//CHALLENGE
// console log: name of the show, number of episodes in season one, then make an array of all the episode name

//Hint use indexing with dot notation # Bronze
let showName = netflix.name;
console.log(showName);
//Here assign "the office"

//Here use dot notation and the .length property # Silver
let seasonOneEpCount = netflix.season1.seasonInfo.episodeInfo.length;
console.log(seasonOneEpCount);
// --OR-- assign this to a variable and call the variable along with the length property
let seasonOne = netflix.season1.seasonInfo.episodeInfo
console.log(seasonOne.length);
//Here assign 6

console.log(seasonOneEpCount);//the length property gives you a piece of this variable if you don't have the length property assign as above

//Here use a for loop to assign to this # Gold
let epNames; 
// think about your structured data
//first how do i get an episode string?
//then how to i get it into the array
console.log(netflix.season1.seasonInfo.episodeInfo[0].episodeName);
//Here assign all the episode names [",epNames here", '', ''...]

//now i need a mechanic to go through the array, so what tool do I have that will do that?
//a for of loop will do that

for (ep of netflix.season1.seasonInfo.episodeInfo)//ep is a name of my own creation
        // console.log(ep);
//how do i list out onlty the episode names themselves?
            // epNames.push(ep.episodeName);
        // console.log(ep.episodeName);
            // console.log(epNames);

//* alternate solution

netflix.season1.seasonInfo.episodeInfo.forEach((data) => console.log(data));
netflix.season1.seasonInfo.episodeInfo.forEach((data) => console.log(data.episodeName));
//there is a progression of thought to progressively solve a problem using clean, efficient code
netflix.season1.seasonInfo.episodeInfo.forEach((data) => epNames.push(data.episodeName));
console.log(epNames);

//create a variable to clean this all up
let epDetails = netflix.season1.seasonInfo.episodeInfo
epDetails.forEach((data) => epNames.push(data.episodeName));
console.log(epNames);



/*JUSTIN'S NOTES


let demoArray = [1, 2, 3, [4, 5, 6]]
// console.log(demoArray[3][1])
let netflix = {
    id: 1,
    name: "The Office",
    season1: {
        seasonInfo: {
            episodeInfo: [{
                episode: 1,
                episodeName: "Pilot"
            },
            {
                episode: 2,
                episodeName: "Diversity Day"
            },
            {
                episode: 3,
                episodeName: "Health Care"
            },
            {
                episode: 4,
                episodeName: "The Alliance"
            },
            {
                episode: 5,
                episodeName: "Basketball"
            },
            {
                episode: 6,
                episodeName: "Hot Girl"
            },
            ]
        }
    },
    season2: {},
    season3: {}
};
// // This is all the obj
// console.log(netflix)
// // Just the show name
// console.log(netflix.name)
// // This is an ep name
// console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName)
// Hint use indexing with dot notation # Bronze
let showName = netflix.name; 
// console.log(showName);
// Here use dot notation and the .length prop # Silver
let seasonOneEpCount = netflix.season1.seasonInfo.episodeInfo.length;
let seasonOne = netflix.season1.seasonInfo.episodeInfo
// console.log(seasonOne);
// console.log(seasonOne.length);
// Here assign 6
console.log(seasonOneEpCount);
// Here use a for loop to assign to this # Gold +
let epNames = []; // ["<ep here>", "", ...]
// console.log(netflix.season1.seasonInfo.episodeInfo[0].episodeName);
// for (ep of netflix.season1.seasonInfo.episodeInfo){
//     epNames.push(ep.episodeName);
//     // console.log(ep.episodeName)
// }
// This gets season one data from the netflix object 
let epDetails = netflix.season1.seasonInfo.episodeInfo
epDetails.forEach((data) => epNames.push(data.episodeName))
console.log(epNames);
*/



//* OBJECT LITERAL STRING
//using an object constructor
let numString = String(5)
//using an object literal
let numString2 = "5"


/*
let weather = {
    temp: 88;
    isRaining : false,
}
*/
//these objects will eventually be sent into webpages to change and update information



//* JSON OBJECTS
// short for JavaScript Object Notation

//example of JSON
// pretty print



//THINGS WE CAN DO WITH JSON DATA
// this is a common object

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

//Returns an array of the keys of an object
console.log(Object.keys(spaceJam.toonSquad));
//Returns an array of the number of keys in an object
console.log(Object.keys(spaceJam.toonSquad.duck));//same as saying daffy duck
//Return a string of the keys 
console.log(Object.keys(spaceJam.toonSquad).toString());

//it's important to know what object a method "lives on"

//Returns an array of the values of an object
console.log(Object.values(spaceJam.toonSquad));

//The object type here is a contructor, and can have a method on it
//A lot of what you need to do in JSON is gather all your values together

//This will make more sense later
//This is an Object object
Object
//This is an Object constructor
Object()


//on a string
let hello = "Hello World!"
console.log("This is from object.keys: ",Object.keys(hello));
console.log("This is from object.values: ",Object.values(hello));


//on a array
let greetArray = ['H', 'e', 'l', 'l', 'o']
console.log('this is from object keys', Object.keys(greetArray));
console.log('this is from object values', Object.values(greetArray));



