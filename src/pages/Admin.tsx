import '../App.css';
import { useState } from 'react';
import { useLocation, useSearchParams } from "react-router-dom";
import Search from '../components/Search';
import Directory from '../components/Directory';
import Save from '../components/Save';
import Grid from '../components/Grid';
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
    const location = useLocation();
    const category = searchParams.get('category');
    const parent = searchParams.get('parent');

    return (
        <div className='pageDiv'>

            <div className='leftColumn'>
                <Search></Search>
                <div id='productDirectoryDiv'>
                    <Directory setFolders={setFolders} setProducts={setProducts}></Directory>
                    <Save folders={folders} products={products}></Save>

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
