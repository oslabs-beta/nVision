export default async function fileParser() {
  const fs = await require('fs');
  const path = await require('path')
  const root = './app';

  // if folder make an object
  const files = {
    name: root,
  };

  function parseFolders(directory: any, rootObj: any) {
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

  parseFolders(root, files);

  // if console.log() after certain depth end up with [Object] displaying instead of actual object - below shows nesting 
  // console.dir(files, { depth: null });
  // console.log('what is file', typeof files)

  return files;
}

// Below is sample of object that tree expects 
// {
//   name: './app',
//   children: [
//     {
//       name: 'api',
//       children: [
//         { name: 'clearSpans', children: [ { name: 'route.js' } ] },
//         {
//           name: 'favorites',
//           children: [
//             { name: '[name]', children: [ { name: 'route.ts' } ] },
//             { name: 'route.ts' }
//           ]
//         },
//         { name: 'fileParser', children: [ { name: 'route.ts' } ] },
//         { name: 'getSpans', children: [ { name: 'route.js' } ] }
//       ]
//     },
//     {
//       name: 'components',
//       children: [
//         { name: 'FavoriteCard.tsx' },
//         { name: 'HomeCard.tsx' },
//         { name: 'RouteTree.tsx' }
//       ]
//     },
//     { name: 'dashboard', children: [ { name: 'page.tsx' } ] },
//     { name: 'favorites', children: [ { name: 'page.tsx' } ] },
//     { name: 'layout.tsx' },
//     { name: 'loading.tsx' },
//     { name: 'models', children: [ { name: 'FavoritesModel.ts' } ] },
//     { name: 'page.tsx' },
//     {
//       name: 'whos',
//       children: [
//         { name: '[name]', children: [ { name: 'page.tsx' } ] }
//       ]
//     }
//   ]
// }
