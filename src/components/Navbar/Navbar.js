import Style from './Navbar.module.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="py-2">
            <div className="container px-5 px-sm-0 d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center">
                <div className={`${Style['logo']} text-light`}>
                    <Link to="/">LOGO</Link>
                </div>
                <ul
                    className={`${Style['links']} p-0 m-0 d-flex flex-column flex-sm-row align-items-start align-items-sm-center`}
                >
                    <li className="my-2 my-sm-0 mx-sm-3">
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="my-2 my-sm-0 mx-sm-3">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="my-2 my-sm-0 mx-sm-3">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="my-2 my-sm-0 mx-sm-3">
                        <Link to="/">Shop</Link>
                    </li>
                    <li className="my-2 my-sm-0 mx-sm-3">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li className="my-2 my-sm-0 mx-sm-3">
                        <Link to="/wishlist">wishlist</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
