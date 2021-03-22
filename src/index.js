const { getInputData, getHoursWorked } = require("./service");
const { SumArray } = require("./utils");

const inputData = getInputData();

for (const i in inputData) {
  const [employee, worked] = inputData[i].split("=");
  const daysWorked = worked.split(",");
  const dayCost = daysWorked.map((day) => getHoursWorked(day));
  const total = SumArray(dayCost);
  console.log(`The amount to pay ${employee} is: ${total} USD`);
}
