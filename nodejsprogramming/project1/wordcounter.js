const fs = require("fs");
const data = fs.readFileSync("input.txt", "utf8");
const words = data.split(/\s+/).length;
fs.writeFileSync("output.txt", "Total Words: " + words);
console.log("Word count done successfully");
