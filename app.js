'use strict';
let userName = prompt('Welcome! what\'s your name?');
alert(`Hello ${userName}, let's play the guessing game`);
alert('please reply with yes/y or no/n')

let mark = 0;

let guessedAge = prompt('I\'m I older than 20 years old?');
if(guessedAge.toLowerCase() == 'yes' || guessedAge.toLowerCase() == 'y'){
    alert('you\'re right, actually i\'m 23 years old');
    // console.log('right');
    mark++;
} else {
    alert('sorry! you\'re wrong');
    // console.log('wrong');
}

let guessedDrink = prompt('is coffee my favorite drink?');
if(guessedDrink.toLowerCase() == 'yes' || guessedDrink.toLowerCase() == 'y'){
    alert('WRONG! i\'d rather nescafe');
    // console.log('wrong');

} else {
    alert('you\'re right! coffee isn\'t my favorite');
    // console.log('right');
    mark++;
}

let guessedStatus = prompt('I\'m I employed these days?');
if(guessedStatus.toLowerCase() == 'yes' || guessedStatus.toLowerCase() == 'y'){
    alert('WRONG! i\'m taking a bootcamp with ASAC');
    // console.log('wrong');
} else {
    alert('you\'re right! i\'m not employed');
    // console.log('right');
    mark++;
}

let guessedMovie = prompt('is the godfather my favorite movie?');
if(guessedMovie.toLowerCase() == 'yes' || guessedMovie.toLowerCase() == 'y'){
    alert('Correct! what else could be');
    // console.log('right');
    mark++;
} else {
    alert('WRONG!');
    // console.log('wrong');
}

let guessedDish = prompt('is mansaf my favorite dish?');
if(guessedDish.toLowerCase() == 'yes' || guessedDish.toLowerCase() == 'y'){
    alert('Correct! what else could be');
    // console.log('right');
    mark++;
} else {
    alert('WRONG! what else could be');
    // console.log('wrong');
}

alert(`you're mark: ${mark}, good job ${userName}`)