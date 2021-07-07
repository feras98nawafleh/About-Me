'use strict';
let userName = prompt('Welcome! what\'s your name?');
alert(`Hello ${userName}, let's play the guessing game`);
alert('please reply with yes/y or no/n');

let mark = 0;

function guessedAge() {
  let guessedAge = prompt('I\'m I older than 20 years old?');
  if (guessedAge.toLowerCase() === 'yes' || guessedAge.toLowerCase() === 'y') {
    alert('you\'re right, actually i\'m 23 years old');
    // console.log('right');
    mark++;
  } else {
    alert('sorry! you\'re wrong');
    // console.log('wrong');
  }
}
// function guesseedDrink(){
let guessedDrink = prompt('is coffee my favorite drink?');
if (guessedDrink.toLowerCase() === 'yes' || guessedDrink.toLowerCase() === 'y') {
  alert('WRONG! i\'d rather nescafe');
  // console.log('wrong');
} else {
  alert('you\'re right! coffee isn\'t my favorite');
  // console.log('right');
  mark++;
}
// }

// function guessedStatus(){
let guessedStatus = prompt('I\'m I employed these days?');
if (guessedStatus.toLowerCase() === 'yes' || guessedStatus.toLowerCase() === 'y') {
  alert('WRONG! i\'m taking a bootcamp with ASAC');
  // console.log('wrong');
} else {
  alert('you\'re right! i\'m not employed');
  // console.log('right');
  mark++;
}
// }

let guessedMovie = prompt('is the godfather my favorite movie?');
if (guessedMovie.toLowerCase() === 'yes' || guessedMovie.toLowerCase() === 'y') {
  alert('Correct! what else could be');
  // console.log('right');
  mark++;
} else {
  alert('WRONG!');
  // console.log('wrong');
}

let guessedDish = prompt('is mansaf my favorite dish?');
if (guessedDish.toLowerCase() === 'yes' || guessedDish.toLowerCase() === 'y') {
  alert('Correct! what else could be');
  // console.log('right');
  mark++;
} else {
  alert('WRONG! what else could be');
  // console.log('wrong');
}

let randomNumber = Math.floor(Math.random() * 10) + 1;
for (let i = 4; i > 0; i--) {
  alert(`start guessing a random number, ${i} attempts left`);
  let guessedNumber = prompt('enter your guessing');
  if (parseInt(guessedNumber) === randomNumber) {
    alert('CORRECT! you guessed it right');
    mark++;
    break;
  }
  if (guessedNumber > randomNumber)
    alert('too high!');
  if (guessedNumber < randomNumber)
    alert('too low!');
}
alert(`the number was ${randomNumber}`);

let commonPL = ['javascript', 'python', 'java', 'C#', 'C++', 'C', 'PHP', 'ruby'];
for (let i = 6; i > 0; i--) {
  let flag = false;
  alert(`start guessing a random programming language, ${i} attempts left`);
  let guessedPL = prompt('enter your guessing');
  for (let i = 0; i < commonPL.length; i++)
    if (guessedPL === commonPL[i]) {
      alert('CORRECT! you guessed it right');
      mark++;
      flag = true;
      break;
    }
  if (flag)
    break;
}
alert(`here's the correct answers: ${commonPL}`);
alert(`you're mark: ${mark}, good job ${userName}`);
