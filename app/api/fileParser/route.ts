import path from 'path'
import fs from 'fs'

export async function GET(request: Request) {
  const root = './app';

  // if folder make an object
  const files = {
    name: root,
  };

  function parseFolders(directory: any, rootObj: any) {
    fs.readdirSync(directory).forEach((file) => {
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

  parseFolders(root, files);

  console.log('what is file', typeof files)

  return new Response(JSON.stringify(files));
}
