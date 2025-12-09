import '../App.css';

function Search() {
    return (
        <div id='searchDiv'>
            <input id="searchInput" placeholder='Search by Product Code'></input>
            <button id='searchButton'><i className="fas fa-search search-icon" id='searchIcon'></i></button>
        </div>
    );
}

export default Search;
