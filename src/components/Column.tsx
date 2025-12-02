import '../App.css';
import Grid from './Grid';
import Search from './Search';

function Column() {
    return (
        <div id='columnDiv'>
            <Search></Search>
            <Grid></Grid>
        </div>
    );
}

export default Column;
