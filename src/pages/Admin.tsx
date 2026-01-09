import { useState } from 'react';
import '../App.css';
import Category from '../components/Category';
import Filter from '../components/Filter';

function Admin() {
    const [categoryIDs, setCategoryIDs] = useState<number[]>([]);
    // FOR TESTING
    // var id = 0;

    const addCategory = () => {
        // ADDING IDS NEED TO BE STORED IN SERVER
        // const newCategoryID = id;
        // id += 1;
        const newCategoryID = Date.now();
        setCategoryIDs([...categoryIDs, newCategoryID]);
    }

    return (
        <div className='pageDiv'>

            <div className='leftColumn'>
                <div id='addCategoryDiv'>
                    <button className='adminButton' onClick={addCategory}>Add category</button>
                </div>

                {categoryIDs.map((id) => (
                    <Category key={id}></Category>
                ))}
            </div>

            <div className='rightColumn'>
                <Filter categoryIDs={categoryIDs}></Filter>
            </div>

        </div>
    );
}

export default Admin;
