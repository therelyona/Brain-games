#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

const parityCheck = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 51);
    console.log(`Question: ${randomNumber}`);
    const answerUser = readlineSync.question('Your answer: ');

    if (randomNumber % 2 === 0 && answerUser === 'yes') {
      console.log('Correct!');
    } else if (randomNumber % 2 !== 0 && answerUser === 'no') {
      console.log('Correct!');
    } else if (randomNumber % 2 === 0 && answerUser !== 'yes') {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}`);
      break;
    } else if (randomNumber % 2 !== 0 && answerUser !== 'no') {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}`);
      break;
    }

    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

parityCheck();
