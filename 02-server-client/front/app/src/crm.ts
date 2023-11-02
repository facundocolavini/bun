import { assertDefined } from "./base";
const state = {
  stages:[
    'New Candidate',
    'Esperando Respuestas',
    'Selección (Reclutador)'
  ]
}
const root = document.getElementById('crm') as HTMLElement | undefined
// Afirmamos que si es obtenemos algo del exterior y es indefinido arroja un error
assertDefined(root, 'root debe ser definido');
root.className ='flex';

// Columns

for (const stage of state.stages){
    const _div = document.createElement('div')
    _div.innerText = stage

    root.appendChild(_div)
}