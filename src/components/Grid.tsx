import '../App.css';
import { useSearchParams } from "react-router-dom";
import Card from './Card';
import type { Product } from '../types';

interface Props {
    products: Product[];
}

function Grid(props: Props) {
    const [searchParams] = useSearchParams();
    const category = searchParams.get("category");
    const parent = searchParams.get("parent");
    const search = searchParams.get("search");

    let products = props.products;

    if (category !== null && category !== "allProducts") {
        if (parent !== null) {
            products = products.filter(product => product.category === category);
        }
        else {
            products = products.filter(product => product.parent === category);
        }
    }

    if (search !== null) {
        const term = search.toLowerCase();
        products = products.filter(product => product.name.toLocaleLowerCase().includes(term));
    }

    // display the product images and their names as cards in a grid
    return (
        <>
            {(search !== null && products.length === 0) ? 
                (<p>No products found</p>)
                :
                (<div className='gridDiv'>
                    {products.map((product, index) => (
                        <Card key={index} name={product.name} path={product.path}></Card>
                    ))}
                </div>)
            }
        </>
    );
}

export default Grid;
