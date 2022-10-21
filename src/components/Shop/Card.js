import Style from './Shop.module.css';
import { Link } from 'react-router-dom';
import { shopActions } from '../Store/shop';
import { useSelector, useDispatch } from 'react-redux';
import { BsFillCartFill, BsFillHeartFill } from 'react-icons/bs';
import { authActions } from '../Store/auth';
const Card = (props) => {
    const product = props.product;
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth.isLoggedin);
    // C A R T   H A N D L E R
    const shoppingCart = [...useSelector((state) => state.shop.cart)];
    const addToCartHandler = () => {
        if (!auth) {
            dispatch(authActions.showAlert(true));
            return;
        }
        !shoppingCart.some((item) => item.id === product.id) &&
            shoppingCart.push(product);
        dispatch(shopActions.addToCart(shoppingCart));
    };
    // W I S H L I S T   H A N D L E R
    const shoppingWishlist = [...useSelector((state) => state.shop.wishlist)];
    const addToWishlistHandler = () => {
        if (!auth) {
            dispatch(authActions.showAlert(true));
            return;
        }
        !shoppingWishlist.some((item) => item.id === product.id) &&
            shoppingWishlist.push(product);
        dispatch(shopActions.addToWishlist(shoppingWishlist));
        console.log(auth);
    };
    return (
        <div
            id={product.id}
            className={`col-lg-3 col-10 col-sm-5 my-3 p-4 mx-md-1 rounded-4 shadow ${Style['card-style']}`}
        >
            <div
                className={`${Style['img-wrapper-shop']} mb-3 position-relative rounded-3 overflow-hidden`}
            >
                <img
                    src={product.image}
                    className="card-img-top mb-3"
                    alt={product.title}
                />
                <div
                    className={`${Style['card-btns']} position-absolute top-50 start-50 translate-middle`}
                >
                    <button
                        title="add to cart"
                        className="btn btn-light me-1 py-1 px-2"
                        onClick={addToCartHandler}
                    >
                        <BsFillCartFill className="fs-5" />
                    </button>
                    <button
                        title="add to wishlist"
                        className="btn btn-light py-1 px-2"
                        onClick={addToWishlistHandler}
                    >
                        <BsFillHeartFill className="fs-5" />
                    </button>
                </div>
            </div>
            <Link to={'/productdetails/' + product.id}>
                <div className="card-body">
                    <p className="text-start text-danger fs-6">
                        {product.category}
                    </p>
                    <h5
                        title={product.title}
                        className="card-title mb-3 text-start text-dark"
                    >
                        {product.title}
                    </h5>
                    <p className="card-text d-flex justify-content-between align-items-center">
                        <strong className="text-dark">
                            EGP {product.price}
                        </strong>
                        <span className="text-muted">
                            Rating :{' '}
                            <span className="text-warning fw-bold">
                                {product.rating.rate}
                            </span>
                        </span>
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default Card;
