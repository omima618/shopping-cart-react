import { shopActions } from '../Store/shop';
import { useSelector, useDispatch } from 'react-redux';
import { BsFillCartFill, BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Style from './Shop.module.css';
import emptyWishlist from '../../assets/empty-wishlist.png';

const Wishlist = () => {
    const dispatch = useDispatch();
    const shoppingWishlist = [...useSelector((state) => state.shop.wishlist)];
    const shoppingCart = [...useSelector((state) => state.shop.cart)];
    // C A R T   H A N D L E R
    const addToCartHandler = (event) => {
        const ProductId = event.target.closest('.wishlist').id;
        const product = shoppingWishlist.find((item) => item.id === +ProductId);
        !shoppingCart.some((item) => item.id === product.id) &&
            shoppingCart.push(product);
        dispatch(shopActions.addToCart(shoppingCart));
    };
    // R E M O V E    H A N D L E R
    const removeHandler = (event) => {
        const ProductId = event.target.closest('.wishlist').id;
        const productIndex = shoppingWishlist.findIndex(
            (item) => item.id === +ProductId
        );
        shoppingWishlist.splice(productIndex, 1);
        dispatch(shopActions.removeFromWishlist(shoppingWishlist));
    };
    // R E M O V E   A L L    H A N D L E R
    const clearHandler = () => {
        dispatch(shopActions.removeFromWishlist([]));
    };
    return (
        <section className="py-5">
            <div className="container">
                <div
                    className={`${Style['item-wrapper']} mx-auto d-flex justify-content-between align-items-center mb-3 rounded-3 shadow p-4`}
                >
                    <h6>Total Items : {shoppingWishlist.length}</h6>
                    <button className="btn btn-danger" onClick={clearHandler}>
                        Remove all
                    </button>
                </div>
                {shoppingWishlist.length === 0 && (
                    <div
                        className={`${Style['item-wrapper']} fs-3 text-center mx-auto rounded-3 shadow p-4`}
                    >
                        <p className="fs-4">
                            You have not added any items yet !
                        </p>
                        <img
                            src={emptyWishlist}
                            alt="empty cart"
                            className={`${Style['empty-img']} d-block mx-auto `}
                        />
                        <Link
                            to="/shop"
                            className="mt-3 btn btn-outline-dark px-4"
                        >
                            Explore
                        </Link>
                    </div>
                )}
                {shoppingWishlist.length > 0 &&
                    shoppingWishlist.map((item) => {
                        return (
                            <div
                                id={item.id}
                                key={item.id}
                                className={`${Style['item-wrapper']} wishlist mx-auto p-4 rounded-4 mb-3 shadow d-flex flex-wrap flex-sm-nowrap justify-content-between align-items-start`}
                            >
                                <div
                                    className={`${Style['img-wrapper']} mb-sm-0 mb-4 px-2 mx-auto mx-sm-0 me-sm-4 text-center position-relative rounded-2 overflow-hidden`}
                                >
                                    <img
                                        className={`mx-auto`}
                                        src={item.image}
                                        alt={item.title}
                                    />
                                    <button
                                        className=" btn btn-light py-1 px-2  position-absolute top-50 start-50 translate-middle"
                                        onClick={addToCartHandler}
                                    >
                                        <BsFillCartFill className="fs-5" />
                                    </button>
                                </div>
                                <div
                                    className={`${Style['details-wrapper']} d-flex justify-content-between`}
                                >
                                    <div>
                                        <h4 className="me-4 fs-5 mb-3">
                                            {item.title}
                                        </h4>
                                        <p className="text-info">
                                            {item.category}
                                        </p>
                                        <strong className="text-secondary fs-5">
                                            EGP {item.price}
                                        </strong>
                                    </div>
                                    <div
                                        className="btn text-danger h-25 border-0 ms-auto"
                                        onClick={removeHandler}
                                    >
                                        <BsFillTrashFill className="fs-5" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </section>
    );
};

export default Wishlist;
