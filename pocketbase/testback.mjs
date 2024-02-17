import { allProjects, ProjectId, allProjectsSorted} from './backend.mjs'

console.log("-------------------------------------Liste de tous les projets---------------------------------------------------")

try {
const allProjectsRecords = await allProjects();
console.log(JSON.stringify(allProjectsRecords, null, 2));
} catch (e) {
console.error(e);
}

console.log("-------------------------------------Un ID d'un projet---------------------------------------------------")


try {
const ProjectIdRecords = await ProjectId();
console.log(JSON.stringify(ProjectIdRecords));
} catch (e) {
console.error(e);
}

console.log("-------------------------------------Liste des projets triés par date---------------------------------------------------")

try {
const allProjectsSortedRecords = await allProjectsSorted();
console.log(JSON.stringify(allProjectsSortedRecords));
} catch (e) {
console.error(e);
}