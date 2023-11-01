// src/base.ts
function assertDefined(value, message) {
  if (value === null)
    throw new Error(`[App] ${message}`);
}

// src/crm.ts
var state = {
  stages: [
    "New Candidate",
    "Esperando Respuestas",
    "Selecci\xF3n (Reclutador)"
  ]
};
var root = document.getElementById("crm");
assertDefined(root, "root debe ser definido");
root.className = "flex";
for (const stage of state.stages) {
  const _div = document.createElement("div");
  _div.innerText = stage;
  root.appendChild(_div);
}
