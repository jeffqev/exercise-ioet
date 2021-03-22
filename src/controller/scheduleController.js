const ScheduleRange = require("../model/Schedule");

const schedule = new ScheduleRange([9, 18], [18, 24], [0, 9]);

exports.typeSchedule = (hora) => {
  hora = hora === 0 ? 24 : hora;

  if (hora > schedule.morning[0] && hora <= schedule.morning[1]) {
    return "morning";
  }

  if (hora > schedule.evening[0] && hora <= schedule.evening[1]) {
    return "evening";
  }

  if (hora > schedule.night[0] && hora <= schedule.night[1]) {
    return "night";
  }
};
