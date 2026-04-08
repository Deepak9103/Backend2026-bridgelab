const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log("\n===== File Manager =====");
  console.log("1. Read File");
  console.log("2. Write File");
  console.log("3. Copy File");
  console.log("4. Delete File");
  console.log("5. List Directory");
  console.log("6. Exit");

  rl.question("Enter your choice (1-6): ", handleChoice);
}

function handleChoice(choice) {
  switch (choice) {
    case "1":
      readFile();
      break;
    case "2":
      writeFile();
      break;
    case "3":
      copyFile();
      break;
    case "4":
      deleteFile();
      break;
    case "5":
      listDirectory();
      break;
    case "6":
      console.log(" Exiting File Manager");
      rl.close();
      break;
    default:
      console.log(" Invalid choice");
      showMenu();
  }
}

function readFile() {
  rl.question("Enter file name to read: ", (filename) => {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) {
        console.log(" File not found!");
      } else {
        console.log("\n--- File Content ---");
        console.log(data);
      }
      showMenu();
    });
  });
}

function writeFile() {
  rl.question("Enter file name to write: ", (filename) => {
    rl.question("Enter content: ", (content) => {
      fs.writeFile(filename, content, (err) => {
        if (err) {
          console.log(" Error writing file");
        } else {
          console.log(" File written successfully!");
        }
        showMenu();
      });
    });
  });
}

function copyFile() {
  rl.question("Enter source file name: ", (src) => {
    rl.question("Enter destination file name: ", (dest) => {
      fs.copyFile(src, dest, (err) => {
        if (err) {
          console.log(" Source file not found!");
        } else {
          console.log(" File copied successfully!");
        }
        showMenu();
      });
    });
  });
}

function deleteFile() {
  rl.question("Enter file name to delete: ", (filename) => {
    fs.unlink(filename, (err) => {
      if (err) {
        console.log(" File not found!");
      } else {
        console.log(" File deleted successfully!");
      }
      showMenu();
    });
  });
}

function listDirectory() {
  rl.question("Enter directory path (or . for current): ", (path) => {
    fs.readdir(path, (err, files) => {
      if (err) {
        console.log(" Directory not found!");
      } else {
        console.log("\n--- Directory Contents ---");
        files.forEach(file => console.log(file));
      }
      showMenu();
    });
  });
}

// Start application
showMenu();
