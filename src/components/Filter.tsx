import '../App.css';

interface Props {
    folderNames: String[];
}

function Filter(props: Props) {
    const folderNames = props.folderNames;
    
    return (
        <div id='filterDiv'>
            <p id='filter'>Filter</p>
            {folderNames.map((folderName, index) => (
                <p className='filterCategory' key={index}>{folderName}</p>
            ))}
        </div>
    );

    return (
        <div id='filterDiv'>
            <p id='filter'>Filter</p>
            <p className='category'>Category 1</p>
            <p className='category'>Category 2</p>
            <ul id='filterList'>
                {/* retrieve category data from uploaded images from user */}
                <li className='subCategory'>Sub-category 1</li>
                <li className='subCategory'>Sub-category 2</li>
            </ul>
            <p className='category'>Category 3</p>
        </div>
    );
}

export default Filter;
