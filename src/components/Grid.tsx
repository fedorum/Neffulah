import { useState, useEffect } from 'react';
import '../App.css';
// import Card from './Card';

function Grid() {
    // const [files, setFiles] = useState([]);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     fetch('/api/products')
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error("Network response was not ok");
    //             }
    //             return response.json();
    //         })
    //         .then(data => setFiles(data.files))
    //         .catch(error => {
    //             setError(error.message);
    //             console.error("Fetch error:", error);
    //         });
    // }, []);

    // if (error) {
    //     return <div id='gridDiv'>Error: {error}</div>;
    // }

    // retrieve products from user?
    // const products = [
    //     "Item 1",
    //     "Item 2",
    //     "Item 3",
    //     "Item 4",
    //     "Item 5"
    // ]

    // console.log(files);

    // return (
    //     <div id='gridDiv'>
    //         {/* {products.map((product, index) => (
    //             <Card index={index} name={product}></Card>
    //         ))} */}

    //         <ul>
    //             <p>List</p>
    //             {files.map((file, index) => (
    //                 <li key={index}>{file}</li>
    //             ))}
    //         </ul>
    //     </div>
    // );

    // TESTING

    // const [message, setMessage] = useState('');
    
    // useEffect(() => {
    //     fetch('/api/products')
    //         .then((res) => res.json())
    //         .then((data) => setMessage(data.message));
    // }, []);

    // return <div id='gridDiv'>{message}</div>;

    return <div id='gridDiv'>WIP</div>
}

export default Grid;
