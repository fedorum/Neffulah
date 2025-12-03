import '../App.css';

interface Props {
    index: number;
    name: string;
}

function Card(props: Props) {
    return (
        <div className='cardDiv'>
            <div className='imageDiv'>
                {/* insert image */}
            </div>
            <div className='nameDiv'>
                <p>{props.name}</p>
            </div>
        </div>
    );
}

export default Card;
