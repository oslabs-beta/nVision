import Wrapper from './Wrapper';

async function getFiles() {
  const files = await fetch('http://localhost:3000/api/nvisionParser', {
    method: 'GET',
    cache: 'no-store'
  });
  const parsedFiles = await files.json();
  return parsedFiles;
}

export default async function Dashboard() {
  const result = await getFiles();

  return (
    <>
      <Wrapper info={result} />
    </>
  );
}
