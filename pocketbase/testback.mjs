import { allProjects, ProjectId} from './backend.mjs'

console.log("-------------------------------------Liste de tous les projets---------------------------------------------------")

try {
const allProjectsRecords = await allProjects();
console.log(JSON.stringify(allProjectsRecords, null, 2));
} catch (e) {
console.error(e);
}

try {
const ProjectIdRecords = await ProjectId();
console.log(JSON.stringify(ProjectIdRecords));
} catch (e) {
console.error(e);
}