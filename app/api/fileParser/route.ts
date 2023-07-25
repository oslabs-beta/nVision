import fileParser from 'fileparser';
import path from 'path'

export async function GET(request: Request) {
    try {
        const appDirPath = path.join(process.cwd(), 'app')
        
        // (__dirname, "../../../../../../../", "app")
        
        const results = await fileParser(appDirPath)

        console.log('file parser results:',results)

        return new Response(JSON.stringify(results))
    }
    catch(e) {
        console.error(e)
    }
}

