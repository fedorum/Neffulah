import '../App.css';
import Grid from '../components/Grid';
import Search from '../components/Search';
import Filter from '../components/Filter';

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
