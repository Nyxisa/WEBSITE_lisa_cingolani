import PocketBase from 'pocketbase' ;
import type { ProjectsEnResponse } from '@/pocketbase-types';
import type { ProjectsFrResponse } from '@/pocketbase-types';

var pocketbase_ip = ''
if (import.meta.env.MODE === 'production') // si production
  {pocketbase_ip = 'https://portfolio.lisa-cingolani.fr/'}
else // si developpement
  {pocketbase_ip = 'http://127.0.0.1:8090'}

//connexion entre l'application et le serveur pocketbase
export const pb = new PocketBase(pocketbase_ip)

// Liste de tous les projets EN
export async function allProjectsEN() {
const allProjectsENRecords = await pb.collection('projects_en').getFullList<ProjectsEnResponse>();
return allProjectsENRecords;
}

// Un ID d'un projet EN
export async function ProjectIdEN(id:string) {
  const ProjectIdENRecords = await pb.collection('projects_en').getOne<ProjectsEnResponse>(id);
  return ProjectIdENRecords;
}

// Liste des projets EN triés par date
export async function allProjectsSortedEN() {
const allProjectsSortedENRecords = await pb.collection('projects_en').getFullList<ProjectsEnResponse>({
        sort: '-date',
    });
return allProjectsSortedENRecords;
}

// Liste de tous les projets FR
export async function allProjectsFR() {
const allProjectsFRRecords = await pb.collection('projects_fr').getFullList<ProjectsFrResponse>();
return allProjectsFRRecords;
}

// Un ID d'un projet FR
export async function ProjectIdFR(id:string) {
  const ProjectIdFRRecords = await pb.collection('projects_fr').getOne<ProjectsFrResponse>(id);
  return ProjectIdFRRecords;
}

// Liste des projets FR triés par date
export async function allProjectsSortedFR() {
const allProjectsSortedFRRecords = await pb.collection('projects_fr').getFullList<ProjectsFrResponse>({
        sort: '-date',
    });
return allProjectsSortedFRRecords;
}

