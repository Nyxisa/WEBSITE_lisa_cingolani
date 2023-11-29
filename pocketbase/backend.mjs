import PocketBase from 'pocketbase';
var pocketbase_ip = ''
if (import.meta.env.MODE === 'production') // si production
  {pocketbase_ip = 'https://portfolio.lisa-cingolani.fr/'}
else // si developpement
  {pocketbase_ip = 'http://127.0.0.1:8090'}

// Liste de tous les projets 
export async function allProjects() {
const allProjectsRecords = await pb.collection('projects').getFullList();
return allProjectsRecords;
}

// Un ID d'un projet
export async function ProjectId(id) {
  const ProjectIdRecords = await pb.collection('projects').getOne<ProjectsResponse>(id);
  return ProjectIdRecords;
}

