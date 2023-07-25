import dynamic from 'next/dynamic'; 
import Random from '../components/Random';

// const Dashboard = dynamic(() => import('nvision'), { ssr: false });

async function getFiles() {

    const files = await fetch('http://localhost:3000/api/fileParser',{
        method: 'GET'
      })

    const parsedFiles = await files.json()

    return parsedFiles

}


export default async function TestPage() {

    const result = await getFiles()

   
    // returns an object 

    return (
        <div>
            <h1>Hello</h1>
            <Random info={result}/>
        </div>
    )
}