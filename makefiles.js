#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const terminal = rl.output;

if (process.env.MY_APP_RUNNING) {
    console.log('not making files')
} else {

    rl.question('nVision is going to add the following files and folders to your application:\n  - app/nvisionDashboard/Wrapper.tsx \n  - app/nvisionDashboard/page.tsx \n  - app/api/nvisionParser/route.js \n  - ./instrumentation.js \n  - ./nvisionServer.js \n\nWarning: if these files already exist in your directory they will be overwritten.\n Type yes to agree or any key to exit.  ', (answer) => {

        if (answer === 'yes') {
            terminal.write('\nOkay. Adding files and folders now...\n')

            fs.copy(path.join(__dirname, '/nvisionDashboard'), path.join(process.cwd(), '/app', '/nvisionDashboard'));
            terminal.write('\n Added a new page to /nvisionDashboard\n');
        
            fs.copy(path.join(__dirname, '/nvisionParser'), path.join(process.cwd(), '/app', '/api', '/nvisionParser' ))
            terminal.write(' Added the nvisionParser route to /api\n');
        
            const traceFile = fs.readFileSync(path.join(__dirname, 'instrumentation.js'), 'utf8');
            fs.writeFileSync('instrumentation.js', traceFile);
            terminal.write(' Added the instrumentation.js file to the root\n');
        
            const serverFile = fs.readFileSync(path.join(__dirname, 'nvisionServer.js'), 'utf8')
            fs.writeFileSync('nvisionServer.js', serverFile)
            terminal.write(' Added the nvisionServer.js file to the root\n')

            terminal.write('\nTo view your nVision dashboard: \n 1. Add the following line to your package.json scripts: "nvision": "node --require ./nvisionServer.js & next dev"\n 2. Run "npm run nvision" in your terminal.\n 3. Navigate to http://localhost:3000/nvisionDashboard first (or the local development environment your application is running in). \n 4. In a new window, open your application and navigate through to view updates in the dashboard.')
            rl.close(); 
        } else {
            terminal.write('Okay. To manually install nVision, please see documentation on https://github.com/oslabs-beta/nVision\n')

            rl.close()
        }

    })


}