import { useState } from 'react';
import '../App.css';
import Search from '../components/Search';
import Grid from '../components/Grid';
import { useSearchParams } from "react-router-dom";
import Filter from '../components/Filter';

interface Folder {
    id: number;
    name: string;
    parent: string;
}

interface Product {
    id: number;
    name: string;
    path: string;
}

function Admin() {
    const [folders, setFolders] = useState<Folder[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get('category');

    // function to retrieve the name of the file when an image is detected in a folder
    const retrieveProduct = async (entry: FileSystemFileHandle, products: Product[]) => {
        const file = await entry.getFile();

        if (file.type.startsWith("image/")) {
            products.push({
                id: Date.now(),
                name: file.name,
                path: "Image"
            });
        }
    }

    // function to select the folder directory to read folder/ file names and images
    const selectFolderDirectory = async () => {
        try {
            // @ts-ignore - this prevents TypeScript from detecting errors related to the File System Access API
            const directoryHandle = await window.showDirectoryPicker();
            const folders: Folder[] = [];
            const products: Product[] = [];

            // iterating through the folders located in the local directory
            for await (const entry of directoryHandle.values()) {
                
                // enter folder
                if (entry.kind === 'directory') {
                    const folderEntry = entry;
                    const folder: Folder = {
                        id: Date.now(),
                        name: folderEntry.name,
                        parent: folderEntry.name
                    }
                    folders.push(folder);

                    for await (const entry of folderEntry.values()) {

                        // enter subfolder
                        if (entry.kind === 'directory') {
                            const subfolderEntry = entry;
                            const folder: Folder = {
                                id: Date.now(),
                                name: subfolderEntry.name,
                                parent: folderEntry.name
                            }
                            folders.push(folder);
                            
                            for await (const entry of subfolderEntry.values()) {
                                // if entry is an image, retrieve product image
                                if (entry.kind === 'file') {
                                    retrieveProduct(entry, products);
                                }
                            }
                        }

                        // if entry is an image, retrieve product image
                        else if (entry.kind === 'file') {
                            retrieveProduct(entry, products);
                        }
                    }
                }
            }
            
            setFolders(folders);
            setProducts(products);
            setSearchParams("?category=products");
        } catch (error) {
            console.error("Directory selection cancelled or failed:", error);
        }
    }

    return (
        <div className='pageDiv'>

            <div className='leftColumn'>
                <Search></Search>
                <div id='productDirectoryDiv'>
                    <button className='adminButton' onClick={selectFolderDirectory}>Select Product Directory</button>
                </div>

                <p id='productDirectoryHeader'>{category}</p>

                <Grid products={products}></Grid>
            </div>

            <div className='rightColumn'>
                <Filter folders={folders}></Filter>
            </div>

        </div>
    );
}

export default Admin;
