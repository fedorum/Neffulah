import '../App.css';
import Card from './Card';

interface Product {
    name: string;
    path: string;
    // url to image stored in database
}

interface Props {
    // images: { name: string; path: string }[];
    products: Product[];
}

function Grid(props: Props) {
    const products = props.products;

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
