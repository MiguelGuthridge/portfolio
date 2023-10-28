
import fs from 'fs/promises';
import path from 'path';

/**
 * Generate a function for checking whether a property exists
 */
export function generateExistsChecker(
  baseDir: string,
): ((name: string) => Promise<boolean>) {

  // Generate the function
  return async function (name: string) {
    const frameworkPath = path.join(baseDir, name);
    try {
      const stats = await fs.stat(frameworkPath);
      return stats.isDirectory();
    } catch (e) {
      return false;
    }
  };
}

/**
 * Return a path if it points to a valid file, otherwise return `undefined`
 */
export async function pathIfExists(path: string): Promise<string | null> {
  try {
    const stats = await fs.stat(path);
    if (stats.isFile()) {
      return path;
    } else {
      return null;
    }
  } catch {
    return null;
  }
}
