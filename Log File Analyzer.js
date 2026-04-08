const fs = require("fs");
const readline = require("readline");

const logFile = "app.log";

// Counters
let totalLines = 0;
let infoCount = 0;
let warnCount = 0;
let errorCount = 0;

const stream = fs.createReadStream(logFile, {
  encoding: "utf8"
});

const rl = readline.createInterface({
  input: stream,
  crlfDelay: Infinity
});

rl.on("line", (line) => {
  totalLines++;

  if (line.includes("INFO")) infoCount++;
  else if (line.includes("WARN")) warnCount++;
  else if (line.includes("ERROR")) errorCount++;
});

rl.on("close", () => {
  console.log("\nLog File Summary Report ");
  console.log(`Total Log Entries : ${totalLines}`);
  console.log(`INFO Count        : ${infoCount}`);
  console.log(`WARN Count        : ${warnCount}`);
  console.log(`ERROR Count       : ${errorCount}`);

  const errorPercentage = ((errorCount / totalLines) * 100).toFixed(2);
  console.log(`Error Percentage  : ${errorPercentage}%`);
});

rl.on("error", (err) => {
  console.error(" Error reading file:", err.message);
});
