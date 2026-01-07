import '../App.css';
import Card from './Card';

interface Props {
    images: { name: string; path: string }[];
}

function Grid(props: Props) {
    const products = props.images;

    // display the products and their names a cards in a grid
    return (
        <div className='gridDiv'>
            {products.map((image, index) => (
                <Card key={index} name={image.name} path={image.path}></Card>
            ))}
        </div>
    );
}

export default Grid;
