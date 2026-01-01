// SERVER CODE FOR DIRECTORY READING
import * as fs from 'fs';
import * as path from 'path';

export default function handler(req, res) {
    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Request method not allowed'});
        return;
    }

    const productsDir = path.join(process.cwd(), 'api', 'products');

    fs.readdir(productsDir, { withFileTypes: true }, (err, files) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }

        const folders = files
            .filter(file => file.isDirectory())
            .map(file => file.name);

        res.status(200).json({ files: folders });
    });
}
