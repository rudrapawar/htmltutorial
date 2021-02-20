'use strict';

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function(){
const guess = document.querySelector('.guess').value;
console.log(guess); 

// When the player enters no number in the fill in section
if (!guess) {
    document.querySelector('.message').textContent = 
    'No number';

// When the number is correct.
} else if (guess == number) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = number;

    if (score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
// When the number is to high
} else if (guess > number){
    
    if (score > 1) {
    document.querySelector('.message').textContent = 'To High!';
    score = score - 1
    document.querySelector('.score').textContent = score;
    } else {
    document.querySelector('.message').textContent = 'You lost the Game' 
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#e84118';
    }
    
// When the number is to low
} else if (guess < number){
    
    if (score > 1) {
    document.querySelector('.message').textContent = 'To Low!';
    score = score - 1
    document.querySelector('.score').textContent = score;
    } else {
    document.querySelector('.message').textContent = 'You lost the Game' 
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#e84118';
    }
}
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;  
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
})

