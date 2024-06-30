import generateRandomNumber from '../generateRandomNumber.js';

const isEven = (number) => number % 2 === 0;

const conditionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameGeneration = () => {
  const question = generateRandomNumber(1, 50);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export { conditionGame, gameGeneration };
