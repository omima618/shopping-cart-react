import { Link } from 'react-router-dom';
import product1 from '../../assets/trend/trend (1).webp';
import product2 from '../../assets/trend/trend (2).webp';
import product3 from '../../assets/trend/trend (3).webp';
import product4 from '../../assets/trend/trend (4).webp';
import './Home.css';
const TrendingProduct = () => {
    return (
        <section className="trend container-fluid">
            <div className="heading text-center my-5">
                <h6 className="w-auto mx-auto">Popular Item in the market</h6>
                <h2 className="w-auto mx-auto">Trending Product</h2>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-between mb-5">
                <div className="product mb-4 mx-auto mb-lg-0 position-relative">
                    <img src={product1} alt="trend product" />
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
                <div className="product mb-4 mx-auto position-relative mb-lg-0 ">
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
                <div className="product mb-4 mx-auto position-relative mb-md-0">
                    <img src={product3} alt="trend product" />
                    <div className="position-absolute w-100 h-100 card-overlay d-flex flex-column justify-content-center align-items-center">
                        <h5 className="mb-3 fs-4 text-light">
                            Women's fashion
                        </h5>
                        <Link
                            to="/shop"
                            className="text-light text-decoration-underline fs-6 fw-bold"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
                <div className="product mx-auto position-relative">
                    <img src={product4} alt="trend product" />
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

export default TrendingProduct;
