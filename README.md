# nVision: observability for your Next.js application

This is Nextjs observability tool by nVision. 

_Note: this package is compatible with Next.js App Router

## Get Started 

1. Install the following nVision npm packages:

```bash
npm install 'package name'
```

2. Inside your app directory, create a Dashboard folder, add a page.tsx and add the following code:

```bash
'use client';
import { DataGridDemo } from 'npm package name'

export default function Tracer() {
    return (
         <DataGridDemo/>
)
};
```

3. Inside your package.json, add the following: 

```bash

```

4. Launch the dashboard


Open [http://localhost:3000/dashboard](http://localhost:3000:dashboard) in your browser to view traces. 

## Coming Soon 

Currently prioritized features: 
- Display client-side-requests

## License

[MIT](https://choosealicense.com/licenses/mit/)