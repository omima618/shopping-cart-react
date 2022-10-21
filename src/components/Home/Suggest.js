import product1 from '../../assets/trend/trend (4).webp';
import product2 from '../../assets/trend/suggested (2).webp';
import product3 from '../../assets/trend/suggested (3).webp';
import product4 from '../../assets/trend/suggested (4).webp';
import product5 from '../../assets/trend/suggested (5).webp';
import product6 from '../../assets/trend/suggested (6).webp';
import product7 from '../../assets/trend/suggested (7).webp';
import product8 from '../../assets/trend/suggested (8).webp';
import './Home.css';
import { Link } from 'react-router-dom';
const Suggest = () => {
    return (
        <section className="trend container-fluid">
            <div className="heading text-center my-5">
                <h6 className="w-auto mx-auto">Products you may like</h6>
                <h2 className="w-auto mx-auto">Suggested Product</h2>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-between mb-5">
                <div className="product position-relative mb-4 mb-lg-2 mx-auto">
                    <img src={product1} alt="trend product" />
                    <div className="position-absolute w-100 h-100 card-overlay d-flex flex-column justify-content-center align-items-center">
                        <h5 className="mb-3 fs-4 text-light">Electronic</h5>
                        <Link
                            to="/shop"
                            className="text-light text-decoration-underline fs-6 fw-bold"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
                <div className="product position-relative mb-4 mb-lg-2 mx-auto">
                    <img src={product2} alt="trend product" />
                    <div className="position-absolute w-100 h-100 card-overlay d-flex flex-column justify-content-center align-items-center">
                        <h5 className="mb-3 fs-4 text-light">Electronic</h5>
                        <Link
                            to="/shop"
                            className="text-light text-decoration-underline fs-6 fw-bold"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
                <div className="product position-relative mb-4 mb-lg-2 mx-auto ">
                    <img src={product3} alt="trend product" />
                    <div className="position-absolute w-100 h-100 card-overlay d-flex flex-column justify-content-center align-items-center">
                        <h5 className="mb-3 fs-4 text-light">Cosmetics</h5>
                        <Link
                            to="/shop"
                            className="text-light text-decoration-underline fs-6 fw-bold"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
                <div className="product position-relative mb-4 mb-lg-2 mx-auto">
                    <img src={product4} alt="trend product" />
                    <div className="position-absolute w-100 h-100 card-overlay d-flex flex-column justify-content-center align-items-center">
                        <h5 className="mb-3 fs-4 text-light">Cosmetics</h5>
                        <Link
                            to="/shop"
                            className="text-light text-decoration-underline fs-6 fw-bold"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
                <div className="product position-relative mb-4 mb-lg-2 mx-auto">
                    <img src={product5} alt="trend product" />
                    <div className="position-absolute w-100 h-100 card-overlay d-flex flex-column justify-content-center align-items-center">
                        <h5 className="mb-3 fs-4 text-light">Cosmetics</h5>
                        <Link
                            to="/shop"
                            className="text-light text-decoration-underline fs-6 fw-bold"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
                <div className="product position-relative mb-4 mb-lg-2 mx-auto">
                    <img src={product6} alt="trend product" />
                    <div className="position-absolute w-100 h-100 card-overlay d-flex flex-column justify-content-center align-items-center">
                        <h5 className="mb-3 fs-4 text-light">Women's fashion</h5>
                        <Link
                            to="/shop"
                            className="text-light text-decoration-underline fs-6 fw-bold"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
                <div className="product position-relative mb-4 mb-lg-2 mx-auto">
                    <img src={product7} alt="trend product" />
                    <div className="position-absolute w-100 h-100 card-overlay d-flex flex-column justify-content-center align-items-center">
                        <h5 className="mb-3 fs-4 text-light">Electronic</h5>
                        <Link
                            to="/shop"
                            className="text-light text-decoration-underline fs-6 fw-bold"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
                <div className="product position-relative mb-4 mb-lg-2 mx-auto">
                    <img src={product8} alt="trend product" />
                    <div className="position-absolute w-100 h-100 card-overlay d-flex flex-column justify-content-center align-items-center">
                        <h5 className="mb-3 fs-4 text-light">Electronic</h5>
                        <Link
                            to="/shop"
                            className="text-light text-decoration-underline fs-6 fw-bold"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Suggest;
