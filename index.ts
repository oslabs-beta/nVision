const fs = require('fs');
const path = require('path')

export default async function fileParser(rootFolder: String): Promise<object>{

  const files = {
    name: 'app',
  };

  async function parseFolders(directory: String, rootObj: any) {

    fs.readdirSync(directory).forEach((file:any) => {
      const absolute = path.join(directory, file);

      if (fs.statSync(absolute).isDirectory()) {
        let folderToAdd = { name: file, children: [] };
        if (!rootObj.children) {
          rootObj.children = [folderToAdd];
        } else {
          rootObj.children.push(folderToAdd);
        }

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
