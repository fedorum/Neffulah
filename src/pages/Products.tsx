import { useState, useEffect } from 'react';
import '../App.css';
import Grid from '../components/Grid';
import Search from '../components/Search';
import Filter from '../components/Filter';

function Products() {
    // read in file names, image names, and images into the frontend from the backend
    // const [fileNames, setfileNames] = useState([]);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     fetch('./api/server')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error("Folder name retrievel error");
    //             }
    //             return response.json();
    //         })
    //         .then(data => setfileNames(data.fileNames))
    //         .catch(error => {
    //             setError(error.messsage);
    //             console.error("Fetch error:", error);
    //         });
    // }, []);

    // if (error) {
    //     return <div id='productDiv'>Error: {error}</div>;
    // }

    // function to capitalise the first letter of each word of the file name
    // function capitalise(string) {
    //     const words = string.split(" ");

    //     // iterates through the 'words' array and capitalises the first letter of each word
    //     const capitalisedString = words.map(word => {
    //         if (word.length === 0) {
    //             return "";
    //         }
    //         return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    //     });

    //     // joins the map of capitalised words together to form a single string
    //     return capitalisedString.join(" ");
    // }

    // TEST
    const fileNames = ['bedding', 'clothing'];

    return (
        <div id='productsDiv'>
            <div className='leftColumn'>
                <Search></Search>
                <Grid></Grid>
            </div>
            <div className='rightColumn'>
                <Filter fileNames={fileNames}></Filter>
            </div>
        </div>
    );
}

export default Products;
