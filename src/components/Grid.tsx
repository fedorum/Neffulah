import '../App.css';
import { useSearchParams } from "react-router-dom";
import Card from './Card';

interface Product {
    name: string;
    path: string;
    category: string;
}

interface Props {
    products: Product[];
}

function Grid(props: Props) {
    const [searchParams] = useSearchParams();
    const filter = searchParams.get("category");
    const search = searchParams.get("search");

    let products = props.products;

    // filter product list based on category search parameter
    if (filter !== null && filter !== "allProducts") {
        products = products.filter(product => product.category === filter);
    }

    // filter product list based on search search parameter
    if (search !== null) {
        const term = search.toLowerCase();
        products = products.filter(product => product.name.toLocaleLowerCase().includes(term));
    }

    // display the product images and their names as cards in a grid
    return (
        <div className='gridDiv'>
            {products.map((product, index) => (
                <Card key={index} name={product.name} path={product.path}></Card>
            ))}
        </div>
    );
}

export default Grid;
