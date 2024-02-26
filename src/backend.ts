import PocketBase from 'pocketbase';
import type { ProjectsFrResponse } from '@/pocketbase-types';
import type { ProjectsEnResponse } from '@/pocketbase-types';

var pocketbase_ip = ''
if (import.meta.env.MODE === 'production') // si production
  {pocketbase_ip = 'https://portfolio.lisa-cingolani.fr/'}
else // si developpement
  {pocketbase_ip = 'http://127.0.0.1:8090'}

//connexion entre l'application et le serveur pocketbase
export const pb = new PocketBase(pocketbase_ip)

// ------------------------------ FR

// Liste de tous les projets FR
export async function allProjects() {
const allProjectsRecords = await pb.collection('projects_fr').getFullList<ProjectsFrResponse>({ requestKey: null });
return allProjectsRecords;
}

// Un ID d'un projet FR
export async function ProjectId(id:string) {
  const ProjectIdRecords = await pb.collection('projects_fr').getOne<ProjectsFrResponse>(id,{ requestKey: null });
  return ProjectIdRecords;
}

// Liste des projets FR triés par date
export async function allProjectsSorted() {
const allProjectsSortedRecords = await pb.collection('projects_fr').getFullList<ProjectsFrResponse>({sort: '-date', requestKey: null});
return allProjectsSortedRecords;
}

// Liste des projets FR triés de façon aléatoire
export async function allProjectsRandom() {
const allProjectsRandomRecords = await pb.collection('projects_fr').getFullList<ProjectsFrResponse>({sort: '@random', requestKey: null});
return allProjectsRandomRecords;
}

// ------------------------------ EN

// Liste de tous les projets EN
export async function allProjectsEn() {
const allProjectsEnRecords = await pb.collection('projects_enen').getFullList<ProjectsEnResponse>({ requestKey: null });
return allProjectsEnRecords;
}

// Un ID d'un projet EN
export async function ProjectIdEn(id:string) {
  const ProjectIdEnRecords = await pb.collection('projects_en').getOne<ProjectsEnResponse>(id,{ requestKey: null });
  return ProjectIdEnRecords;
}

// Liste des projets EN triés par date
export async function allProjectsSortedEn() {
const allProjectsSortedEnRecords = await pb.collection('projects_en').getFullList<ProjectsEnResponse>({sort: '-date', requestKey: null});
return allProjectsSortedEnRecords;
}

// Liste des projets EN triés de façon aléatoire
export async function allProjectsRandomEn() {
const allProjectsRandomEnRecords = await pb.collection('projects_en').getFullList<ProjectsEnResponse>({sort: '@random', requestKey: null});
return allProjectsRandomEnRecords;
}

