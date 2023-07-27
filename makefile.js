#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

if (process.env.MY_APP_RUNNING) {
    console.log('not making files')
} else {
    const devContent = fs.readFileSync(path.join(__dirname, 'instrumentation.js'), 'utf8')
    fs.writeFileSync('instrumentation.js', devContent)
    console.log('added an instrumentation file')
}

