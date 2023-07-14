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
      console.log(file)
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

  // if console.log() after certain depth end up with [Object] displaying instead of actual object - below shows nesting 
  console.dir(files, { depth: null });
  console.log('what is file', typeof files)

  return new Response(JSON.stringify(files));
}

// Below is sample of object that tree expects 
// const data = {
  //   name: './app',
  //   children: [
  //     {
  //       name: 'folder1',
  //       children: [
  //         { name: 'file1.txt', children: [{ name: 'testgrandchild' }] },
  //         { name: 'file2.txt' },
  //       ],
  //     },
  //     {
  //       name: 'folder2',
  //       children: [{ name: 'file3.txt' }, { name: 'file4.txt' }],
  //     },
  //     {
  //       name: 'folder3',
  //       children: [{ name: 'file5.txt' }, { name: 'file6.txt' }],
  //     },
  //     {
  //       name: 'folder4',
  //       children: [{ name: 'file7.txt' }, { name: 'file8.txt' }],
  //     },
  //   ],
  // };
