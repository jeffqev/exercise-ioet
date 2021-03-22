exports.timeDifference = (timeEntrance, timeDeparture) => {
  return timeEntrance > timeDeparture
    ? Math.abs(timeEntrance - 24) + timeDeparture
    : Math.abs(timeEntrance - timeDeparture);
};

exports.typeWeek = (day) => {
  if (
    day === "MO" ||
    day === "TU" ||
    day === "WE" ||
    day === "TH" ||
    day === "FR"
  ) {
    return "week";
  } else if (day === "SA" || day === "SU") {
    return "weekend";
  }
};

exports.SumArray = (array) => {
  let total = 0;
  for (const i in array) {
    total += array[i];
  }
  return total;
};
