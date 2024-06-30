#!/usr/bin/env node
import startGame from '../src/index.js';
import { conditionGame, gameGeneration } from '../src/games/brain-even.js';

startGame(conditionGame, gameGeneration);
