import Style from './Shop.module.css';
import ProductControls from './ProductControls';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((json) => {
                setProducts(json);
            });
    };
    return (
        <section className="py-5">
            {products.length > 0 && (
                <div className="container text-center fs-3">
                    <div className="row justify-content-evenly">
                        {products.map((product) => {
                            return (
                                <div
                                    key={product.id}
                                    className={`col-lg-3 col-10 col-sm-5 my-3 p-4 mx-md-1 rounded-4 shadow ${Style['card-style']}`}
                                >
                                    <Link to={'/productdetails/' + product.id}>
                                        {' '}
                                        <img
                                            src={product.image}
                                            className="card-img-top mb-3"
                                            alt={product.title}
                                        />{' '}
                                    </Link>
                                    <div className="card-body">
                                        <Link
                                            to={'/productdetails/' + product.id}
                                        >
                                            <h5
                                                title={product.title}
                                                className="card-title mb-3 text-start text-dark"
                                            >
                                                {product.title}
                                            </h5>
                                        </Link>
                                        <p className="card-text d-flex justify-content-between align-items-center">
                                            <strong>EGP {product.price}</strong>
                                            <span className="text-muted">
                                                Rating : {product.rating.rate}
                                            </span>
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <ProductControls />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Shop;
