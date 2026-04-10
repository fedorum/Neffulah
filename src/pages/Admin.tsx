import { useState } from 'react';
import '../App.css';
import Search from '../components/Search';
import Grid from '../components/Grid';
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
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
    category: string;
}

function Admin() {
    const [folders, setFolders] = useState<Folder[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const location = useLocation();
    const category = searchParams.get('category');
    const parent = searchParams.get('parent');

    // function to retrieve the name of the file when an image is detected in a folder
    const retrieveProduct = async (entry: FileSystemFileHandle, category: string, products: Product[]) => {
        const file = await entry.getFile();

        if (file.type.startsWith("image/")) {
            products.push({
                id: Date.now(),
                name: file.name,
                path: "Image",
                category: category
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
                    // add folder to list of folders
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
                            // add subfolder to list of folders
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
                                    retrieveProduct(entry, subfolderEntry.name, products);
                                }
                            }
                        }

                        // if entry is an image, retrieve product image
                        else if (entry.kind === 'file') {
                            retrieveProduct(entry, folderEntry.name, products);
                        }
                    }
                }
            }
            
            navigate("/admin/productsUploaded?category=allProducts");
            setFolders(folders);
            setProducts(products);
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

                <div id='categoryDisplayed'>
                    {location.pathname !== "/admin/productsUploaded" ?
                        (<p id='productDirectoryHeader'>No products uploaded</p>) 
                        : 
                        (category === "allProducts" ? 
                            (<p id='productDirectoryHeader'>All products</p>) 
                            : 
                            (parent === null ? 
                                (<p id='productDirectoryHeader'>{`All products > ${category}`}</p>)
                                :
                                (<p id='productDirectoryHeader'>{`All products > ${parent} > ${category}`}</p>)
                            )
                        )
                    }
                </div>

                {location.pathname !== "/admin" ? <Grid products={products}></Grid> : null}
            </div>

            <div className='rightColumn'>
                <Filter folders={folders}></Filter>
            </div>

        </div>
    );
}

export default Admin;
