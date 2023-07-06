const colors = require("colors")

console.log("Hello World!".rainbow)

for (let i = 0; i < 10; i++) {
    console.log(i)
}

// print 3 lines
console.log('Hella'); //regular text
console.log('Ogobene'.green); // outputs green text
console.log('nationwide' .bgYellow); //outputs a yellow background
console.log('ogobene'.purple, 'nationwide' .bgMagenta );

//print 1-100 with random colors
let sale = 1
while (sale <=100) {
    console.log(colors.random(sale.toString())); //outputs 1-100 in random colors
    sale++
}

// FizzBuzz with "Fizz" in red for multiples of 3,5 and 7
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      console.log(`${i} fizz in red`.red);
    } else if (i % 5 === 0) {
      console.log(`${i} Buzz in green`.green);
    } else if (i % 7 === 0) {
      console.log(`${i} zing in blue`.blue);
    } else {
      console.log("failed");
    }
  }
  
//single player rock paper scissors
const promptsync = require('prompt-sync');
const prompt = promptsync();

//declare several options
function choices() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const number = Math.floor(Math.random() * choices.length);
    return choices[number];
}
//declare the players and who wins in this case choice1 and choice2
function correctperson(choice1,choice2) {
    if (choice1 === choice2)
{
    return ("no winner!");
}elseif (
    (choice1 === 'rock' && 
        (choice2 === 'scissiors' ||
        choice2 === 'lizard'))  ||
    (choice1 === 'paper' && 
        (choice2 === 'rock' ||
        choice2 === 'spock'))  ||
    (choice1 === 'scissors' && 
        (choice2 === 'paper' ||
        choice2 === 'lizard'))  ||
    (choice1 === 'lizard' && 
        (choice2 === 'paper' ||
        choice2 === 'spock'))  ||
    (choice1 === 'spock' && 
        (choice2 === 'rock' ||
        choice2 === 'scissors'))  
        
)
{
    return "Winner!";
}
else  {
    return "choice2 won!";
}
}

function start() {
    const choice1 = prompt ('what do you choose?(rock, paper,scissors, lizard or spock):');


}


// Incomplete figure out at EOB 