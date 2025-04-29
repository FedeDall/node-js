const fs = require("fs");

const QUOTES_DIR = process.argv[2];

/*
console.log("Process arguments:\n");
for (const ff of process.argv) {
    console.log(ff);
}
console.log("\n");
*/

fs.readdir(QUOTES_DIR, { withFileTypes: true }, (err, files) => {
    if (err) {
        console.error(`Error while reading ${QUOTES_DIR} directory`);
        process.exitCode = 1;
        return;
    }

    const txtFiles = files
        .filter((f) => f.isFile() && f.name.endsWith(".txt"))
        .map((f) => f.name);

    const randomIdx = Math.floor(Math.random() * txtFiles.length);
    const quoteFile = `${QUOTES_DIR}/${txtFiles[randomIdx]}`;

    fs.readFile(quoteFile, "utf-8", (err, data) => {
        if (err) {
            console.error(`Error while reading ${quoteFile} file`);
            process.exitCode = 1;
            return;
        }
        console.log(data.toString());
    });
});
