const fileData = require("../controller/fileController");
const { HoursWorked } = require("../controller/priceController");

exports.getInputData = () => {
  return fileData || [];
};

exports.getHoursWorked = (day) => {
  return HoursWorked(day) || "";
};
