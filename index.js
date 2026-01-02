function pullUpReps(max, day) {
  return Array.from({ length: 5 }).map((_, index) => {
    let numOfReps = max - index;
    if (day === 1) return numOfReps;
    if (day === 2 && index > 3) return numOfReps + 1;
    if (day === 3 && index > 2) return numOfReps + 1;
    if (day === 4 && index > 1) return numOfReps + 1;
    if (day === 5 && index > 0) return numOfReps + 1;
    return numOfReps;
  });
}
function createWeeklyPullUpPlan(max) {
  return Array.from({ length: 5 }).map((_, dayIndex) => {
    return pullUpReps(max, dayIndex + 1);
  });
}

const input = document.getElementById("max-reps");
const output = document.getElementById("reps-container");

if (!input || !output) {
  throw new Error("Required elements not found");
}

const savedMax = localStorage.getItem("repMax");
if (savedMax) {
  input.value = savedMax;
}

function updatePlan() {
  if (!output) return;

  const max = Number(input.value);
  output.innerHTML = "";

  if (!max || max < 5) return;

  localStorage.setItem("repMax", String(max));

  const plan = createWeeklyPullUpPlan(max);

  plan.forEach((day, index) => {
    const ul = document.createElement("ul");
    const repsInADay = day.join(", ");
    ul.innerHTML = `<strong>Day ${index + 1}</strong>: ${repsInADay}`;

    output.appendChild(ul);
  });
}

input.addEventListener("input", updatePlan);

if (savedMax) {
  updatePlan();
}
