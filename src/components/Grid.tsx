import '../App.css';
import Card from './Card';

function Grid() {
    // retrieve products from user?
    const products = [
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 5"
    ]

    return (
        <div id='gridDiv'>
            {products.map((product, index) => (
                <Card index={index} name={product}></Card>
            ))}
        </div>
    );
}

export default Grid;
