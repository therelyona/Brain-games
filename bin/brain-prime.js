#!/usr/bin/env node
import startGame from '../src/index.js';
import { conditionGame, gameGeneration } from '../src/games/brain-prime.js';

startGame(conditionGame, gameGeneration);
