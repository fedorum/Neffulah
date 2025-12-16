import '../App.css'
import { NavLink } from 'react-router-dom';

const navLinkClass = ({ isActive }: { isActive: boolean }) => isActive ? 'active-link-class' : 'inactive-link-class';

function Navigation() {
    return (
        <div id="navigationDiv">
            <NavLink to="/" className={navLinkClass}>PRODUCTS</NavLink>
            <NavLink to="/cart" className={navLinkClass}>CART</NavLink>
        </div>
    );
}

export default Navigation;
