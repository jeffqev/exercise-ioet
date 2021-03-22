const Price = require("../model/Price");
const { timeDifference, typeWeek } = require("../utils");
const { typeSchedule } = require("./scheduleController");

const price = new Price(
  {
    morning: 15,
    evening: 20,
    night: 25,
  },
  {
    morning: 20,
    evening: 25,
    night: 30,
  }
);

const priceHour = (timeEntrance, timeDeparture, day) => {
  const hoursWorked = timeDifference(timeEntrance, timeDeparture);
  const typeweek = typeWeek(day);
  const typeschedule = typeSchedule(timeEntrance);
  return hoursWorked * price[typeweek][typeschedule];
};

exports.HoursWorked = (day) => {
  const dayworked = day.substr(0, 2);

  const [entrance, departure] = day.substr(2).split("-");

  timeEntrance = Number(entrance.split(":")[0]);
  timeDeparture = Number(departure.split(":")[0]);

  return priceHour(timeEntrance, timeDeparture, dayworked);
};
