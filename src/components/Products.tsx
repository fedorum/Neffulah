import '../App.css';
import Grid from './Grid';
import Search from './Search';
import Filter from './Filter';

function Products() {
    return (
        <div id='productsDiv'>
            <div className='leftColumn'>
                <Search></Search>
                <Grid></Grid>
            </div>
            <div className='rightColumn'>
                <Filter></Filter>
            </div>
        </div>
    );
}

export default Products;
