import generateRandomNumber from '../generateRandomNumber.js';

const conditionGame = 'What number is missing in the progression?';

const arithmeticProgression = (number, interval) => {
  const progressionArr = [number];
  let newItem = number;
  while (progressionArr.length <= 10) {
    newItem += interval;
    progressionArr.push(newItem);
  }
  return progressionArr;
};

const gameGeneration = () => {
  const randomNumber = generateRandomNumber(1, 50);
  const randomInterval = generateRandomNumber(2, 10);
  const randomIndex = generateRandomNumber(0, 9);

  const progression = arithmeticProgression(randomNumber, randomInterval);
  const answer = progression[randomIndex].toString();
  progression[randomIndex] = '..';

  const question = progression.join(' ');
  return [question, answer];
};

export { conditionGame, gameGeneration };
