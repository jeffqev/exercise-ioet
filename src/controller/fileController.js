const fs = require("fs");

const readFile = fs.readFileSync("./src/data.txt", "utf-8").split("\n");

const lineArray = readFile.filter((line) => line != "");

module.exports = lineArray;
