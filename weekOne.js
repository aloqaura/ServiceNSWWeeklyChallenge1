const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
    // Your Code Here...
let people = {
    name: "Joe",
    age: 23,
    interests: ["Partying, Yoga"]
};
function persons() {
    
}
    
    function commonInterests() {
        
    };

    function greetingForUser1(name, interest) {
        console.log(`Hi, I've never seen you around here. My name is ${name} and I absolutely adore ${interest}. `);
    }; // It's would be alot of effore to type this out everytime a new character comes along.  

    function chapterCounter(chapterNumber) {
        console.log(`Chapter ${chapterNumber} is about to begin`);
    }; // Function avoids console logging a new chapter;
    
console.log('Welcome to the world of hard work and dedication (seriously, this took a lot of effort).');
console.log(''); // These are to supplement for paragraphs;
while (true) { 
    let userName = await askQuestion('What might your name be? ');
console.log(`Hello ${userName}, it's a pleasure to meet you. `);
console.log('');
    let confirmedUserName = await askQuestion("I would like to confirm that your name is " + userName + ", please answer 'yes' or 'no'. "); // String concatenation to implement space at the end of the sentence;
    if (confirmedUserName == "yes" || confirmedUserName == "Yes" || confirmedUserName == "YES") {
        console.log('Excellent!');
        break;
    } else if (confirmedUserName == "no" || confirmedUserName == "NO" || confirmedUserName == "No") {
        console.log("Please enter your name again: ")
        console.log('wonderful!'); // I want it to repeat line 34 to confirm the NEW username and loop the question again until it is answered yes;       
    } else {
                console.log("I requested a 'yes' or 'no'. Now I would like a 'yes' or 'no'. ");
            };
    }; // I want to use 'let' to update the name if the user changed it; I don't know how;
console.log('');
let genderArray = []; // User selects partner's sex that can be anything so that we can be politically correct;
for (let i = 0; i < 1; i++) {
    let partnerGender = await askQuestion("Please select your partner's gender. ");
    genderArray.push(partnerGender);
let userAge = await askQuestion("What is your age?")
console.log("");

chapterCounter(1); // New Chapter;
console.log('');

console.log("What are your top 3 favourite things to do!? ")
let userInterest = [];
for (let i = 0; i < 3; i++) {
    let interests = await askQuestion ("Please enter your interests: ");
    userInterest.push(interests);
};

function greeting(name, age) {
    console.log("My name is " + name + ". I think I'm a perfect match for you because I'm a " + age + " year old and I absolutely love " + userInterest[1] + " as well!");
};
greeting("Ash", 25);

let askFavouriteFoods = await askQuestion("What's your favourite food? ");
console.log("I know right, that's such a popular food 'Sigh'... I wish that I enjoyed that food as well, but I really enjoy coke. ");
console.log("This took a great amount of time, not sure if the project will continue, I didn't cry but it made me want to give up. Just to be clear, It was lines 41, 55. ");
}; // Do not enter code outside this curly brace while asking questions;

};
Program().then(() => {
    process.exit(0);
});