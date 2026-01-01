import { useState, useEffect } from 'react';
import '../App.css';
import Card from './Card';

function Grid() {
    // const [files, setFiles] = useState([]);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     fetch('/api/products')
    //         .then(response => {
    //             if (!response.ok) {
    //                 console.error('Server error:', response.status);
    //                 throw new Error("Network response was not ok");
    //             }
    //             return response.json();
    //         })
    //         .then(data => setFiles(data.files))
    //         .catch(error => {
    //             setError(error.messsage);
    //             console.error("Fetch error:", error);
    //         });
    // }, []);

    // if (error) {
    //     return <div id='gridDiv'>Error: {error}</div>;
    // }

    // return (
    //     <div id='gridDiv'>
    //         {files}
    //     </div>
    // );

    return <div id='gridDiv'>WIP</div>
}

export default Grid;
