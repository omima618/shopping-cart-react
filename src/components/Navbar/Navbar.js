import Style from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { BsFillCartFill, BsFillHeartFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const shoppingCart = [...useSelector((state) => state.shop.cart)];
    const shoppingWishlist = [...useSelector((state) => state.shop.wishlist)];
    return (
        <nav className="py-3">
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
                        <Link to="/support">Support</Link>
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
                    <li
                        className={`${Style['controls']} position-relative my-2 my-sm-0 mx-sm-3`}
                    >
                        <span
                            className={`position-absolute text-center fw-bold text-light bg-dark rounded-circle`}
                        >
                            {shoppingCart.length}
                        </span>
                        <Link to="/cart" className="text-success">
                            <BsFillCartFill className="fs-4" />
                        </Link>
                    </li>
                    <li
                        className={`${Style['controls']} position-relative my-2 my-sm-0 mx-sm-3`}
                    >
                        <span
                            className={`position-absolute text-center fw-bold text-light bg-dark rounded-circle`}
                        >
                            {shoppingWishlist.length}
                        </span>
                        <Link to="/wishlist" className="text-danger">
                            <BsFillHeartFill className="fs-4" />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
