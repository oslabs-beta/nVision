import fileParser from '@nvision/fileparser';
import path from 'path'

export async function GET(request: Request) {
    try {
        const appDirPath = path.join(process.cwd(), 'app');
        const results = await fileParser(appDirPath)
        return new Response(JSON.stringify(results))
    }
    catch(e) {
        console.error(e)
    }
}

