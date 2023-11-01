// src/base.ts
function assertDefined(value, message) {
  if (value === null)
    throw new Error(`[App] ${message}`);
}

// src/crm.ts
var state = {
  stages: [
    "New Candidate",
    "Waiting for Reply",
    "Screening (Recruiter)"
  ]
};
var root = document.getElementById("crm");
assertDefined(root, "root debe ser definido");
console.log(root);
for (const stage of state.stages) {
}
