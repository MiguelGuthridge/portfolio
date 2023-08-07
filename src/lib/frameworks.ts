
import fs from 'fs/promises';
import path from 'path';
import { generateExistsChecker } from './helpers';

const BASE_DIR = './data/frameworks';

export const frameworkExists = generateExistsChecker(BASE_DIR);
