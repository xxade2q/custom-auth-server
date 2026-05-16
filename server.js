const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Home route - forces a "valid" response
app.get('/', (req, res) => {
    res.send("valid");
});

// CheckKey route - forces a "valid" response
app.get('/checkkey', (req, res) => {
    res.send("valid");
});

// Catch-all safety route - forces a "valid" response
app.use((req, res) => {
    res.send("valid");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
