import '../App.css';

function Search() {
    return (
        <div id='filterDiv'>
            <p id='filter'>Filter</p>
            <p>Category 1</p>
            <p>Category 2</p>
            <ul id='filterList'>
                {/* retrieve number of 'categories' from user */}
                <li>Sub-category 1</li>
                <li>Sub-category 2</li>
            </ul>
            <p>Category 3</p>
        </div>
    );
}

export default Search;
