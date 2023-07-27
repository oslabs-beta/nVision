#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

if (process.env.MY_APP_RUNNING) {
    console.log('not making files')
} else {
    const devContent = fs.readFileSync(path.join(__dirname, 'nvisionServer.js'), 'utf8')
    fs.writeFileSync('nvisionServer.js', devContent)
    console.log('added a server file')
}

