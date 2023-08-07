
import fs from 'fs/promises';
import path from 'path';
import { generateExistsChecker } from './helpers';

const BASE_DIR = './data/languages';

export const languageExists = generateExistsChecker(BASE_DIR);
