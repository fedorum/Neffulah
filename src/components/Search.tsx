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
    // const handleRefresh = () => {
    //     window.location.reload();
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
                // onClick={handleRefresh}
            >
                <i className="fas fa-search search-icon" id='searchIcon'></i>
            </button>
        </div>
    );
}

export default Search;
