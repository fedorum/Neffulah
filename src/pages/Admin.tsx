import { useState } from 'react';
import '../App.css';
import Grid from '../components/Grid';
import Filter from '../components/Filter';

function Admin() {
    const [categories, setCategories] = useState<string[]>([]);
    // FOR TESTING
    const images = [{ name: "Pyjamas", path: "Pyjamas"}];
    const fileNames = ["bedding"];

    const addCategory = () => {
        const newCategory = "Category";

        setCategories([...categories, newCategory]);
    }

    return (
        <div className='pageDiv'>
            <div className='leftColumn'>
                <div className='editDiv'>
                    <button className='adminButton' onClick={addCategory}>Add category</button>
                </div>

                {/* PROBLEM WITH DIV CONTAINMENT */}
                {categories.map((category, index) => (
                    <div className='categoryDiv' key={index}>
                        <p className='adminCategoryP'>{category}</p>
                        <Grid images={images}></Grid>
                    </div>
                ))}
            </div>
            <div className='rightColumn'>
                <Filter fileNames={fileNames}></Filter>
            </div>
        </div>
    );
}

export default Admin;
