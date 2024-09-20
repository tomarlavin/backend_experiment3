const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    const userData = `Username: ${username}, Email: ${email}, Password: ${password}\n`;

    fs.appendFile('user_data.txt', userData, (err) => {
        if (err) {
            console.error('Failed to write to file:', err);
            res.status(500).send('Server error, please try again later.');
        } else {
            res.status(200).send('Signup successful!');
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});