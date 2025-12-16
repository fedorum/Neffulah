const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/products', (req, res) => {
    const directoryPath = path.join(__dirname, 'products');

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.error("Error reading directory: ", err);
            return res.status(500).send("Unable to read directory");
        }
        
        res.json({ files });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
