const express = require('express');
const app = express();


function auth(req, res, next) {
    if (req.query.admin === 'true') {
        req.admin = true;
        next();
        return;
    }
    res.send('You are not admin');
}

module.exports = auth;