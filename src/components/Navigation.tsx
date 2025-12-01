interface Props {
    margin: string;
}

function Navigation(props: Props) {
    const products = [
        'PRODUCTS',
        'CART'
    ];

    return (
        <ul className="list-group" style={{ margin: props.margin }}>
            {products.map(product => (
                <li className="list-group-item" key={product}>{product}</li>
            ))}
        </ul>
    );
}

export default Navigation;
