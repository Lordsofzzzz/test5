import fs from 'fs';
import path from 'path';

const notesDirectory = path.join(process.cwd(), 'notes');

export function getNoteSlugs() {
  return fs.readdirSync(notesDirectory).map((file) => file.replace(/\.md$/, ''));
}

export function getNoteBySlug(slug: string) {
  const fullPath = path.join(notesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return fileContents;
}

export function getAllNotes() {
  return getNoteSlugs();
}