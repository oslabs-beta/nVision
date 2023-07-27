#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');

if (process.env.MY_APP_RUNNING) {
    console.log('not making files')
} else {
    fs.copy(path.join(__dirname, '/dist', '/fileparser'), path.join(process.cwd(), '/app', '/api', '/fileparser' ))
    console.log('added a fileparser folder')
}

