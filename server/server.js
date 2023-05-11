const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Body Parsing stores any information coming in into the req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
})