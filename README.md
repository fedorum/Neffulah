# Neffulah

This application is an e-commerce website for Nefful International distributors to showcase their products in stock. It allows both distributors and their customers to have a visually accessible and informative product management and ordering experience.

## Database 

- Store images on Cloudflare R2 (?)
- Store product name, id, and URL to respective images on Prisma (?)

## Uploading Images

1. Product images are first selected via the File System Access API
    - Admin/ product owner is asked to select a directory from their local drive
    - The directory contains the file structure for products and their categories
    - For example, a pair of socks would be located in the 'Accessories' sub-folder in the 'Clothing' folder
2. Product images are stored in cloud databases
    - Image files (.jpg, etc.) are uploaded to an image database
    - Metadata (id, link to location of image in database) of each product is stored in a separate database


