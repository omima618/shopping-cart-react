import Card from './Card';
import { useState, useEffect } from 'react';
import preloader from '../../assets/preloader.gif';
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
            {products.length === 0 && (
                <div className="preloader d-flex justify-content-center">
                    <img src={preloader} alt="loading" />
                </div>
            )}
            {products.length > 0 && (
                <div className="container text-center fs-3">
                    <div className="row justify-content-evenly">
                        {products.map((product) => {
                            return <Card key={product.id} product={product} />;
                        })}
                    </div>
                </div>
            )}
        </section>
    );
};

export default Shop;
