import { useState, useEffect } from 'react';
import '../App.css';

function Filter() {
    const [files, setFiles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('./api/server')
            .then(response => {
                if (!response.ok) {
                    console.error('Server error:', response.status);
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => setFiles(data.files))
            .catch(error => {
                setError(error.messsage);
                console.error("Fetch error:", error);
            });
    }, []);

    if (error) {
        return <div id='gridDiv'>Error: {error}</div>;
    }

    // capitalises the first letter of each word in the theme for aesthetics
    function capitalise(string: string) {
        const words = string.split(" ");

        // iterates through the 'words' array and capitalises the first letter of each word
        const capitalisedString = words.map(word => {
            if (word.length === 0) {
                return "";
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        });

    // joins the map of capitalised words together to form a single string
    return capitalisedString.join(" ");
    }

    return (
        <div id='filterDiv'>
            <p id='filter'>Filter</p>
            {files.map((file, index) => (
                <p className='category' key={index}>{capitalise(file)}</p>
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
