const fs = require('fs');
const path = require('path');

function getJsonFilesInDirectory(directoryPath) {
    return fs.readdirSync(directoryPath).filter(file => path.extname(file) === '.json');
}

function buildArrayFromJsonFiles(directoryPath) {
    const jsonFiles = getJsonFilesInDirectory(directoryPath);
    return jsonFiles.map(file => {
        const fileName = path.basename(file, '.json');
        const title = fileName.replace(/_/g, ' '); // Assuming file name is used for title
        return { path: path.join(directoryPath, file), title };
    });
}

const directoryPath = 'public/graphql'; // Change this to your directory path
const jsonArray = buildArrayFromJsonFiles(directoryPath);
console.log(jsonArray);
