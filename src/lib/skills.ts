
import fs from 'fs/promises';
import path from 'path';
import { generateExistsChecker } from './helpers';

const BASE_DIR = './data/skills';

export const skillExists = generateExistsChecker(BASE_DIR);
