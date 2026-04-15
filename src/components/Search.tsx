import '../App.css';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
    
    // sets a debounce effect for the search bar
    useEffect(() => {
        const handler = setTimeout(() => {
            setSearchParams((prev) => {
                if (searchTerm) {
                    prev.set("search", searchTerm);
                } else {
                    prev.delete("search");
                }
                return prev;
            }, {replace: true});
        }, 500);

        return () => clearTimeout(handler);
    }, [searchTerm, setSearchParams]);

    // 
    // const handleChange = (event) => {
    //     setSearchTerm(event.target.value);
    // };

    // sets the user's search in the search params
    // const setURLSearch = () => {
    //     setSearchParams({ search: searchTerm });
    // };

    return (
        <div id='searchDiv'>
            <input 
                id="searchInput" 
                type="text" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                spellCheck="false" 
                placeholder='Search by Product Code'
            >
            </input>
            <button 
                id='searchButton' 
                // onClick={(searchTerm) => setSearchParams({ category: searchTerm })}
                // onClick={setURLSearch}
            >
                <i className="fas fa-search search-icon" id='searchIcon'></i>
            </button>
        </div>
    );
}

export default Search;
