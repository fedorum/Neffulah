import '../App.css';

interface Props {
    name: string;
    path: string;
}

function Card(props: Props) {
    return (
        <div className='cardDiv'>
            <div className='imageDiv'>
                <img src={props.path} alt={props.name}></img>
            </div>
            <div className='nameDiv'>
                <p>{props.name}</p>
            </div>
        </div>
    );
}

export default Card;
