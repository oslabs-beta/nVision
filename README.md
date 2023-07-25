# fileParser

This is a File Parser, by nVision. It is designed to be used in conjunction with [other package name]. 

_Note: the below instructions are for Next.js applications that use App Router_

## Getting Started 

Install the following nVision npm package:
```bash
npm install [packagename]
```

2. Inside your api folder create a folder called fileParser 

3. Inside fileParser, create a route.ts file and paste the following code:
```bash
import fileParser from '[package name]';
import path from 'path'

export async function GET(request: Request) {
    try {
        const appDirPath = path.join(process.cwd(), 'app')
        
        const results = await fileParser(appDirPath)

        return new Response(JSON.stringify(results))
    }
    catch(e) {
        console.error(e)
    }
}
```

4. Continue following the instructions back on []()

## License

[MIT](https://choosealicense.com/licenses/mit/)