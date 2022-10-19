import Style from './Shop.module.css';
import { Link } from 'react-router-dom';
import { shopActions } from '../Store/shop';
import { useSelector, useDispatch } from 'react-redux';
import { BsFillCartFill, BsFillHeartFill } from 'react-icons/bs';

const Card = (props) => {
    const product = props.product;
    const dispatch = useDispatch();
    // C A R T   H A N D L E R
    const shoppingCart = [...useSelector((state) => state.shop.cart)];
    const addToCartHandler = () => {
        !shoppingCart.some((item) => item.id === product.id) &&
            shoppingCart.push(product);
        dispatch(shopActions.addToCart(shoppingCart));
    };
    // W I S H L I S T   H A N D L E R
    const shoppingWishlist = [...useSelector((state) => state.shop.wishlist)];
    const addToWishlistHandler = () => {
        !shoppingWishlist.some((item) => item.id === product.id) &&
            shoppingWishlist.push(product);
        dispatch(shopActions.addToWishlist(shoppingWishlist));
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
                        className="btn btn-success me-2"
                        onClick={addToCartHandler}
                    >
                        <BsFillCartFill className="fs-5" />
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={addToWishlistHandler}
                    >
                        <BsFillHeartFill className="fs-5" />
                    </button>
                </div>
            </div>
            <Link to={'/productdetails/' + product.id}>
                <div className="card-body">
                    <p className="text-start text-info fs-6">
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
