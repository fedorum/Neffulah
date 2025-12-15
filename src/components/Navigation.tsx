import { Link } from 'react-router-dom';
import '../App.css'
// import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div id="navigationDiv">
            <p className='navigationPara'><Link to="/">PRODUCTS</Link></p>
            <p className='navigationPara'>CART</p>
        </div>
    );
}

export default Navigation;
