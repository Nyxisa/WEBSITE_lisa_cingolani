import PocketBase from 'pocketbase' ;
import type { ProjectsResponse } from '@/pocketbase-types';

var pocketbase_ip = ''
if (import.meta.env.MODE === 'production') // si production
  {pocketbase_ip = 'https://portfolio.lisa-cingolani.fr/'}
else // si developpement
  {pocketbase_ip = 'http://127.0.0.1:8090'}

//connexion entre l'application et le serveur pocketbase
export const pb = new PocketBase(pocketbase_ip)

// Liste de tous les projets 
export async function allProjects() {
const allProjectsRecords = await pb.collection('projects').getFullList<ProjectsResponse>();
return allProjectsRecords;
}

// Un ID d'un projet
export async function ProjectId(id:string) {
  const ProjectIdRecords = await pb.collection('projects').getOne<ProjectsResponse>(id);
  return ProjectIdRecords;
}

// Liste des projets triés par date
export async function allProjectsSorted() {
const allProjectsSortedRecords = await pb.collection('projects').getFullList<ProjectsResponse>({
        sort: '-date',
    });
return allProjectsSortedRecords;
}

