import PocketBase from 'pocketbase' ;
import { ProjectsEnResponse } from '@/pocketbase-types';

var pocketbase_ip = ''
if (import.meta.env.MODE === 'production') // si production
  {pocketbase_ip = 'https://portfolio.lisa-cingolani.fr/'}
else // si developpement
  {pocketbase_ip = 'http://127.0.0.1:8090'}

//connexion entre l'application et le serveur pocketbase
export const pb = new PocketBase(pocketbase_ip)

// Liste de tous les projets 
export async function allProjectsEN() {
const allProjectsENRecords = await pb.collection('projects_en').getFullList<ProjectsEnResponse>();
return allProjectsENRecords;
}

// Un ID d'un projet
export async function ProjectIdEN(id) {
  const ProjectIdENRecords = await pb.collection('projects_en').getOne<ProjectsEnResponse>(id);
  return ProjectIdENRecords;
}


// Liste des projets triés par date
export async function allProjectsENSorted() {
const allProjectsENSortedRecords = await pb.collection('projects_en').getFullList<ProjectsEnResponse>({
        sort: '-date',
    });
return allProjectsENSortedRecords;
}

