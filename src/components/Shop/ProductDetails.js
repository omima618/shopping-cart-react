import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProductControls from './ProductControls';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Style from './Shop.module.css';
const ProductDetails = () => {
    const params = useParams();
    const [product, setProduct] = useState(null);
    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = () => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then((res) => res.json())
            .then((json) => {
                setProduct(json);
            });
    };
    return (
        <div className="container py-5">
            <Link to="/">
                <BsFillHouseDoorFill className=" fs-3 text-success" />
                <span className="text-success ms-1">Back To Home</span>
            </Link>

            {product && (
                <div className="py-5 d-flex flex-column flex-sm-row align-items-center">
                    <div>
                        <img
                            className="w-100 mb-5"
                            src={product.image}
                            alt={product.title}
                        />
                    </div>
                    <div
                        className={`ms-sm-5 mt-4 mt-sm-0 p-3 p-sm-0 ${Style['prod-det']}`}
                    >
                        <h3 className="fs-1 mb-3"> {product.title} </h3>
                        <p className="text-muted">{product.description}</p>
                        <div className="d-flex flex-column flex-sm-row justify-content-between mb-2 mb-sm-4">
                            <span className="text-danger fs-5">
                                Rating : {product.rating.rate}
                            </span>
                            {product.rating['count'] > 0 ? (
                                <span className="text-success fs-5">
                                    In stock
                                </span>
                            ) : (
                                <span className="text-danger fs-5">
                                    Out of stock
                                </span>
                            )}
                        </div>
                        <div className="d-flex flex-column flex-sm-row justify-content-between">
                            <strong className="fs-4 my-2 my-sm-0 mb-sm-0">
                                EGP {product.price}
                            </strong>
                            <span>
                                <ProductControls />
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
