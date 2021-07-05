'use strict';
let userName = prompt('Welcome! what\'s your name?');
alert(`Hello ${userName}, let's play the guessing game`);


let guessedAge = prompt('I\'m I older than 20 years old?');
if(guessedAge.toLowerCase() == 'yes' || guessedAge.toLowerCase() == 'y'){
    alert('you\'re right, actually i\'m 23 years old');
} else {
    alert('sorry! you\'re wrong');
}

let guessedDrink = prompt('is coffee my favorite drink?');
if(guessedDrink.toLowerCase() == 'yes' || guessedDrink.toLowerCase() == 'y'){
    alert('WRONG! i\'d rather nescafe');
} else {
    alert('you\'re right! coffee isn\'t my favorite');
}

let guessedStatus = prompt('I\'m I employed these days?');
if(guessedStatus.toLowerCase() == 'yes' || guessedStatus.toLowerCase() == 'y'){
    alert('WRONG! i\'m taking a bootcamp with ASAC');
} else {
    alert('you\'re right! i\'m not employed');
}

let guessedMovie = prompt('is the godfather my favorite movie?');
if(guessedMovie.toLowerCase() == 'yes' || guessedMovie.toLowerCase() == 'y'){
    alert('Correct! what else could be');
} else {
    alert('WRONG!');
}

let guessedDish = prompt('is mansaf my favorite dish?');
if(guessedDish.toLowerCase() == 'yes' || guessedDish.toLowerCase() == 'y'){
    alert('Correct! what else could be');
} else {
    alert('WRONG! what else could be');
}