import generateRandomNumber from '../generateRandomNumber.js';

const conditionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const gameGeneration = () => {
  const randomNumber = generateRandomNumber(1, 100);

  const answer = isPrime(randomNumber);
  const question = randomNumber;
  return [question, answer];
};

export { conditionGame, gameGeneration };
