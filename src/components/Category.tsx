import { useState } from 'react';
import '../App.css';
import Grid from './Grid';

function Category() {
    const [categoryName, setCategoryName] = useState("Category");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategoryName(event.target.value);
    }

    // TESTING
    const images = [{ name: "Pyjamas", path: "Pyjamas"}];

    return (
        <div className='categoryDiv'>

            <input className='adminCategoryInput' value={categoryName} onChange={handleChange}></input>
            {/* <div className='addSubCategoryDiv'>
                <button className='adminButton'>Add sub-category</button>
                </div> */}

            <Grid images={images}></Grid>
        </div>
    );
}

export default Category;
