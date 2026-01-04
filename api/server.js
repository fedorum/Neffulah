// SERVER CODE FOR DIRECTORY READING

import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method !== 'GET') {
        res.status(405).json({ error: 'Request method not allowed'});
        return;
    }

    // sets the directory to be read as the current working directory, and './api/products'
    const productsDir = path.join(process.cwd(), 'api', 'products');

    // reads the product directory to retrieve the names of files, images, and image urls
    fs.readdir(productsDir, { withFileTypes: true }, (error, files) => {
        if (error) {
            res.status(500).json({ error: error.message });
            return;
        }

        // maps the name of each file to a single object in a list
        const fileNames = files
            .filter(file => file.isDirectory())
            .map(file => file.name);

        // maps the name of each image to a single object in a list
        const images = files
            .filter(file => !file.isDirectory())
            .map(file => ({
                name: file.name,
                path: path.join(productsDir, file.name)
            }));

        console.log(fileNames);
        console.log(images);
        
        // returns the names of the files, images, and image urls to the products component
        res.status(200).json({ fileNames, images });
    });
}
