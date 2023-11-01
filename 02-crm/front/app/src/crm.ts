import { assertDefined } from "./base";
const state = {
  stages:[
    'New Candidate',
    'Waiting for Reply',
    'Screening (Recruiter)'
  ]
}
const root = document.getElementById('crm') as HTMLElement | undefined

// Afirmamos que si es obtenemos algo del exterior y es indefinido arroja un error
assertDefined(root, 'root debe ser definido');

console.log(root);

// Columns

for (const stage of state.stages){

}