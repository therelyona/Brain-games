import generateRandomNumber from "../generateRandomNumber.js";

const conditionGame = 'Find the greatest common divisor of given numbers.';

const searchDividers = (num) => {
  const dividersWithoutRemainder = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      dividersWithoutRemainder.push(i);
    }
  }
  return dividersWithoutRemainder;
};

const gcd = (firstNumber, secondNumber) => {
  const firstDividers = searchDividers(firstNumber);
  const secondDividers = searchDividers(secondNumber);

  const commonDividers = [];
  for (let i = 0; i < firstDividers.length; i += 1) {
    if (secondDividers.includes(firstDividers[i])) {
      commonDividers.push(firstDividers[i]);
    }
  }
  return commonDividers.pop();
};

const gameGeneration = () => {
  const firstNumber = generateRandomNumber(1, 50);
  const secondNumber = generateRandomNumber(1, 50);

  const commonDividers = gcd(firstNumber, secondNumber);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = commonDividers.toString();
  return [question, answer];
};

export { conditionGame, gameGeneration };
