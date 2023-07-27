import fileParser from '@nvisionjs/parse'

const path = require('path');

export async function GET(request) {
    try {
        const appDirPath = path.join(process.cwd(), 'app');
        const results = await fileParser(appDirPath)
        return new Response(JSON.stringify(results))
    }
    catch(e) {
        console.error(e)
    }
}