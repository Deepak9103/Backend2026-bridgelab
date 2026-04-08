const fs = require("fs");
const path = require("path");

function syncDirectories(sourceDir, targetDir) {
  try {
   
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const sourceFiles = fs.readdirSync(sourceDir);

    sourceFiles.forEach((file) => {
      const sourcePath = path.join(sourceDir, file);
      const targetPath = path.join(targetDir, file);

      const sourceStat = fs.statSync(sourcePath);
      if (sourceStat.isFile()) {
        if (!fs.existsSync(targetPath)) {
          fs.copyFileSync(sourcePath, targetPath);
          console.log(`📄 Copied: ${file}`);
        } else {
          const targetStat = fs.statSync(targetPath);
          if (sourceStat.mtime > targetStat.mtime) {
            fs.copyFileSync(sourcePath, targetPath);
            console.log(`🔄 Updated: ${file}`);
          }
        }
      }
    });
  } catch (error) {
    console.error(" Error during synchronization:", error.message);
  }
}

const source = "./source";
const target = "./target";

syncDirectories(source, target);
