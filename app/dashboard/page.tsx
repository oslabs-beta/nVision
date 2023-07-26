// Creates Dashboard Page

import Wrapper from './Wrapper';

async function getFiles() {
  const files = await fetch('http://localhost:3000/api/fileParser', {
    method: 'GET',
  });
  const parsedFiles = await files.json();
  return parsedFiles;
}

export default async function Dashboard() {
  const result = await getFiles();

  return (
    <div>
      <Wrapper info={result} />
    </div>
  );
}
