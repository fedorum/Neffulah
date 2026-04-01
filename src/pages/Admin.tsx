import { useState } from 'react';
import '../App.css';
import Category from '../components/Category';
import Filter from '../components/Filter';

interface ProductImage {
    name: string;
    id: number;
}

function Admin() {
    const [productImages, setProductImages] = useState<ProductImage[]>([]);
    const [folderNames, setFolderNames] = useState<string[]>([]);

    const selectProductImageDirectory = async () => {
        try {
            // @ts-ignore - this prevents TypeScript from detecting erros related to the File System Access API
            const directoryHandler = await window.showDirectoryPicker();
            const productImages: ProductImage[] = [];

            // iterating through the images/ folders located in the local directory
            for await (const entry of directoryHandler.values()) {
                // retrieving the names of images and saving them to state
                if (entry.kind === 'file') {
                    const file = await entry.getFile();

                    if (file.type.startsWith("image/")) {
                        productImages.push({
                            name: file.name,
                            id: Date.now()
                        });
                    }
                }
                // retrieving the names of folders and saving them to state
                else if (entry.kind === 'directory') {
                    folderNames.push(entry.name);
                }
            }
            setProductImages(productImages);
            setFolderNames(folderNames);
        } catch (error) {
            console.error("Directory selection cancelled or failed:", error);
        }
    }

    return (
        <div className='pageDiv'>

            <div className='leftColumn'>
                <div id='addCategoryDiv'>
                    <button className='adminButton' onClick={selectProductImageDirectory}>Upload Product Images</button>
                </div>

                {folderNames.map((name, index) => (
                    <Category name={name} key={index}></Category>
                ))}
            </div>

            <div className='rightColumn'>
                <Filter folderNames={folderNames}></Filter>
            </div>

        </div>
    );
}

export default Admin;
