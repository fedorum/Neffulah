import '../App.css'
import { NavLink } from 'react-router-dom';

// sets the navigation link of the current displayed page to be active, highlighting its name
const navLinkClass = ({ isActive }: { isActive: boolean }) => isActive ? 'active-link-class' : 'inactive-link-class';

function Navigation() {
    return (
        <div id="navigationDiv">
            <NavLink to="/" className={navLinkClass}>HOME</NavLink>
            <NavLink to="/products" className={navLinkClass}>PRODUCTS</NavLink>
            <NavLink to="/cart" className={navLinkClass}>CART</NavLink>
            <NavLink to="/admin" className={navLinkClass}>ADMIN</NavLink>
        </div>
    );
}

export default Navigation;
