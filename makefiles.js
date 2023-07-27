#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

if (process.env.MY_APP_RUNNING) {
    console.log('not making files')
} else {
    fs.copy(path.join(__dirname, '/nvisionDashboard'), path.join(process.cwd(), '/app', '/nvisionDashboard'));
    console.log('Added a new page to /nvisionDashboard');

    fs.copy(path.join(__dirname, '/fileparser'), path.join(process.cwd(), '/app', '/api', '/fileparser' ))
    console.log('Added a fileparser route to /api');

    const traceFile = fs.readFileSync(path.join(__dirname, 'instrumentation.js'), 'utf8');
    fs.writeFileSync('instrumentation.js', traceFile);
    console.log('Added the instrumentation.js file to the root');

    const serverFile = fs.readFileSync(path.join(__dirname, 'nvisionServer.js'), 'utf8')
    fs.writeFileSync('nvisionServer.js', serverFile)
    console.log('Added the nvisionServer.js file to the root')
}