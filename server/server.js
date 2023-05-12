const express = require('express');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// Body Parsing stores any information coming in into the req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once('open', () => {
    console.log(`Database running`);
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    })
})