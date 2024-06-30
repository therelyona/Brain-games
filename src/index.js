import readlineSync from 'readline-sync';

const startGame = (conditionGame, gameGeneration) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(conditionGame);
  for (let i = 1; i <= 3; i += 1) {
    const [question, answer] = gameGeneration();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');

    if (answer === answerUser) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
