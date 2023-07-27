#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

if (process.env.MY_APP_RUNNING) {
    console.log('not making files')
} else {
    fs.copy(path.join(__dirname, '/dashboard'), path.join(process.cwd(), '/app', '/dashboard'));
    console.log('added a dashboard')
}

