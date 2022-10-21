import Style from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { BsFillCartFill, BsFillHeartFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../Store/auth';
import { useEffect } from 'react';
const Navbar = () => {
    const shoppingCart = [...useSelector((state) => state.shop.cart)];
    const shoppingWishlist = [...useSelector((state) => state.shop.wishlist)];
    const authStatus = useSelector((state) => state.auth.isLoggedin);
    const dispatch = useDispatch();
    // L O G O U T    H A N D L E R
    const logoutHandler = () => {
        dispatch(authActions.authStatus(false));
        localStorage.setItem('isLoggedin', !authStatus);
    };
    // C H E C K    A U T H
    useEffect(() => {
        checkAuth();
    }, []);
    const checkAuth = () => {
        const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedin'));
        isLoggedIn
            ? dispatch(authActions.authStatus(true))
            : dispatch(authActions.authStatus(false));
    };
    return (
        <nav className="py-3">
            <div className="container px-5 px-sm-0 d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center">
                <div className={`${Style['logo']} text-light`}>
                    <Link to="/">SHOP</Link>
                </div>
                <ul
                    className={`${Style['links']} p-0 m-0 d-flex flex-column flex-sm-row align-items-start align-items-sm-center`}
                >
                    <li className="my-2 my-sm-0 mx-sm-3">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="my-2 my-sm-0 mx-sm-3">
                        <Link to="/support">Support</Link>
                    </li>
                    <li className="my-2 my-sm-0 mx-sm-3">
                        <Link to="/shop">Shop</Link>
                    </li>
                    {authStatus && (
                        <>
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
                        </>
                    )}
                    {!authStatus && (
                        <>
                            <li className="my-2 my-sm-0 mx-sm-3">
                                <Link to="/login">Login</Link>
                            </li>
                            <li className="my-2 my-sm-0 mx-sm-3">
                                <Link to="/signup">Signup</Link>
                            </li>
                        </>
                    )}
                    {authStatus && (
                        <li className="my-2 my-sm-0 mx-sm-3">
                            <Link to="/" onClick={logoutHandler}>
                                Logout
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
