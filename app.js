

const express = require('express');
const app = express();
const port = 3000; // Choose any port you prefer

// Define a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});