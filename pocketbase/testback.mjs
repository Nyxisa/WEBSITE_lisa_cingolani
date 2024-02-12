import { allProjectsEN, ProjectIdEN} from './backend.mjs'

console.log("-------------------------------------Liste de tous les projets---------------------------------------------------")

try {
const allProjectsENRecords = await allProjectsEN();
console.log(JSON.stringify(allProjectsENRecords, null, 2));
} catch (e) {
console.error(e);
}

try {
const ProjectIdENRecords = await ProjectIdEN();
console.log(JSON.stringify(ProjectIdENRecords));
} catch (e) {
console.error(e);
}