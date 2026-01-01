function pullUpReps(max, day) {
  return Array.from({ length: 5 }).map((_, index) => {
    let numOfReps = max - index;
    if (day === 1) {
      return numOfReps;
    }

    if (day === 2) {
      if (index > 3) {
        return numOfReps + 1;
      }
    }
    if (day === 3) {
      if (index > 2) {
        return numOfReps + 1;
      }
    }

    if (day === 4) {
      if (index > 1) {
        return numOfReps + 1;
      }
    }

    if (day === 5) {
      if (index > 0) {
        return numOfReps + 1;
      }
    }

    return numOfReps;
  });
}
function createWeeklyPullUpPlan(max) {

  return Array.from({ length: 5 }).map((_, dayIndex) => {
    return pullUpReps(max, dayIndex + 1);
  })
}
console.log(createWeeklyPullUpPlan(9))

