#!/usr/bin/env node
import generateRandomNumber from "../generateRandomNumber.js";

const arithmeticSymbol = ['+', '-', '*'];

const conditionGame = 'What is the result of the expression?';

const calculator = (firstNumber, secondNumber, symbol) => {
  switch (symbol) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return `Error, the operator '${symbol} not recognized.`;
  }
};

const gameGeneration = () => {
  const firstNumber = generateRandomNumber(1, 50);
  const secondNumber = generateRandomNumber(1, 50);

  const randomIndexArithmeticSymbol = generateRandomNumber(1, arithmeticSymbol.length);
  const randomArithmeticSymbols = arithmeticSymbol[randomIndexArithmeticSymbol - 1];

  const question = `${firstNumber} ${randomArithmeticSymbols} ${secondNumber}`;
  const resultQuestion = calculator(firstNumber, secondNumber, randomArithmeticSymbols);
  const answer = resultQuestion.toString();
  return [question, answer];
};

export { conditionGame, gameGeneration };
