
import fs from 'fs/promises';
import path from 'path';
import { generateExistsChecker } from './helpers';
import { languageExists } from './languages';
import { frameworkExists } from './frameworks';
import { skillExists } from './skills';

const BASE_DIR = './data/projects';


type ProjectStatus = "In-progress" | "Active" | "Complete" | "Incomplete";


export type Project = {
  // Added by getProjectDetails
  id: string

  // properties from info.json
  name: string
  description: string
  status: ProjectStatus
  languages: string[]
  frameworks: string[]
  skills: string[]
  repo?: string
  site?: string
  package?: {
    command: string
    url: string
  }

  // Properties from other files
  fullDescription: string
}

/**
 * Return whether a project exists
 */
export const projectExists = generateExistsChecker(BASE_DIR);

/**
 * Get data about every project
 */
export async function getProjects(): Promise<Project[]> {
  const potentials = await fs.readdir(BASE_DIR);

  const validationResults = await Promise.all(potentials.map(
    async name => { return { name, exists: await projectExists(name) }; }
  ));

  const projects = validationResults.filter(p => p.exists).map(p => p.name);

  return Promise.all(projects.map(getProjectDetails));
}

/**
 * Load the full description of the project from `description.md`
 */
export async function getProjectFullDescription(name: string): Promise<string> {
  if (!projectExists(name)) {
    throw new Error(`Project '${name}' does not exist`);
  }

  return fs.readFile(
    path.join(BASE_DIR, name, 'description.md'),
    { encoding: 'utf-8' }
  );
}

/**
 * Load and validate details about a single project
 */
export async function getProjectDetails(name: string): Promise<Project> {
  if (!projectExists(name)) {
    throw new Error(`Project '${name}' does not exist`);
  }

  const projectData = JSON.parse(
    await fs.readFile(
      path.join(BASE_DIR, name, 'info.json'),
      { encoding: 'utf-8' }
    )
  );

  // Add the id property
  const project = {
    id: name,
    fullDescription: await getProjectFullDescription(name),
    ...projectData,
  } as Project;

  // Most properties are validated by the JSON schema, so don't bother checking
  // them here

  // Track all validation errors in one go
  const errors: string[] = [];

  // Check that each language exists
  for (const lang of project.languages) {
    if (!languageExists(lang)) {
      errors.push(`Language '${lang}' does not have a definition`);
    }
  }

  // Check that each framework exists
  for (const framework of project.frameworks) {
    if (!frameworkExists(framework)) {
      errors.push(`Framework '${framework}' does not have a definition`);
    }
  }

  // Check that each skill exists
  for (const skill of project.skills) {
    if (!skillExists(skill)) {
      errors.push(`Skill '${skill}' does not have a definition`);
    }
  }

  if (errors.length) {
    const errorsSummary = errors.reduce((p, c) => `${p}\n${c}`, '');
    throw new Error(`Project '${name}' failed validation. ${errorsSummary}`)
  }

  return project;
}
