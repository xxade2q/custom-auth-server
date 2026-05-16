const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Authentication Server is Online! 🚀");
});

app.get('/checkkey', (req, res) => {
    const userKey = req.query.key;

    if (!userKey) {
        return res.send("no_key_provided");
    }

    // MASTER RULE: If the key starts with "EXO-", automatically let them in!
    if (userKey.startsWith("EXO-")) {
        res.send("valid");
    } else {
        res.send("invalid");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
