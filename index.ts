const fs = require('fs');
const path = require('path')

export default async function fileParser(rootFolder: String): Promise<object>{
  // Initialize object to be passed to the tree visualizer
  const files = {
    name: 'app',
  };

  async function parseFolders(directory: String, rootObj: any) {
    fs.readdirSync(directory).forEach((file: any) => {
      // Iterate through the root folder
      const absolute = path.join(directory, file);
      
      // If the current file is a directory initialize a new child object
      if (fs.statSync(absolute).isDirectory()) {
        let folderToAdd = { name: file, children: [] };

        // If current parent directoy does not yet have children add a children array
        // Else push the new object to the existing array
        if (!rootObj.children) {
          rootObj.children = [folderToAdd];
        } else {
          rootObj.children.push(folderToAdd);
        }

        // Recurse through the file tree
        parseFolders(absolute, folderToAdd);

      } else {
        let fileToAdd = { name: file };
        if (!rootObj.children) {
          rootObj.children = [fileToAdd];
        } else {
          rootObj.children.push(fileToAdd);
        }
      }
    });
  }

  await parseFolders(rootFolder, files);

  return files;
}
