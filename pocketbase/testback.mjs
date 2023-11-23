import { allProjects, ProjectId} from './backend.mjs'

console.log("-------------------------------------Liste de tous les projets---------------------------------------------------")

try {
const allProjectsRecords = await allProjects();
console.log(JSON.stringify(allProjectsRecords, null, 2));
} catch (e) {
console.error(e);
}

try {
const ProjectIDRecords = await ProjectID('tu0t0tl805ez0wo');
console.log(JSON.stringify(ProjectIDRecords));
} catch (e) {
console.error(e);
}