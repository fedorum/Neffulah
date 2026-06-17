import '../App.css';
import { useNavigate } from "react-router-dom";

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

interface Props {
    setFolders: React.Dispatch<React.SetStateAction<Folder[]>>;
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

function Directory(props: Props) {
    const navigate = useNavigate();

    // retrieves the name of the product when an image file is detected in a folder
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
    };

    // selects the folder directory to read folder/ file names and images
    const selectFolderDirectory = async () => {
        try {
            // @ts-ignore - this prevents TypeScript from detecting errors related to the File System Access API
            const directoryHandle = await window.showDirectoryPicker();
            const folders: Folder[] = [];
            const products: Product[] = [];

            for await (const entry of directoryHandle.values()) {
                
                if (entry.kind === 'directory') {
                    const folderEntry = entry;
                    const folder: Folder = {
                        id: Date.now(),
                        name: folderEntry.name,
                        parent: folderEntry.name
                    }
                    folders.push(folder);

                    for await (const entry of folderEntry.values()) {

                        if (entry.kind === 'directory') {
                            const subfolderEntry = entry;
                            const folder: Folder = {
                                id: Date.now(),
                                name: subfolderEntry.name,
                                parent: folderEntry.name
                            }
                            folders.push(folder);
                            
                            for await (const entry of subfolderEntry.values()) {
                                if (entry.kind === 'file') {
                                    retrieveProduct(entry, subfolderEntry.name, products);
                                }
                            }
                        }

                        else if (entry.kind === 'file') {
                            retrieveProduct(entry, folderEntry.name, products);
                        }
                    }
                }
            }
            
            navigate("/admin/productsUploaded?category=allProducts");
            props.setFolders(folders);
            props.setProducts(products);
        } catch (error) {
            console.error("Directory selection cancelled or failed:", error);
        }
    };

    return (
        <button className='adminButton' onClick={(selectFolderDirectory)}>Select Product Directory</button>
    )

}

export default Directory;
