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
                <div className="product mb-2 mx-auto mb-lg-0">
                    <img src={product1} alt="trend product" />
                </div>
                <div className="product mb-2 mx-auto mb-lg-0 ">
                    <img src={product2} alt="trend product" />
                </div>
                <div className="product mb-2 mx-auto mb-md-0">
                    <img src={product3} alt="trend product" />
                </div>
                <div className="product mx-auto">
                    <img src={product4} alt="trend product" />
                </div>
            </div>
        </section>
    );
};

export default TrendingProduct;
