import product1 from '../../assets/trend/trend (4).webp';
import product2 from '../../assets/trend/suggested (2).webp';
import product3 from '../../assets/trend/suggested (3).webp';
import product4 from '../../assets/trend/suggested (4).webp';
import product5 from '../../assets/trend/suggested (5).webp';
import product6 from '../../assets/trend/suggested (6).webp';
import product7 from '../../assets/trend/suggested (7).webp';
import product8 from '../../assets/trend/suggested (8).webp';
import './Home.css';
const Suggest = () => {
    return (
        <section className="trend container-fluid">
            <div className="heading text-center my-5">
                <h6 className="w-auto mx-auto">Product you may like</h6>
                <h2 className="w-auto mx-auto">Suggested Product</h2>
            </div>
            <div className="d-flex flex-wrap align-items-center justify-content-between mb-5">
                <div className="product mb-2 mx-auto">
                    <img src={product1} alt="trend product" />
                </div>
                <div className="product mb-2 mx-auto">
                    <img src={product2} alt="trend product" />
                </div>
                <div className="product mb-2 mx-auto ">
                    <img src={product3} alt="trend product" />
                </div>
                <div className="product mx-auto">
                    <img src={product4} alt="trend product" />
                </div>
                <div className="product mb-2 mx-auto">
                    <img src={product5} alt="trend product" />
                </div>
                <div className="product mb-2 mx-auto  ">
                    <img src={product6} alt="trend product" />
                </div>
                <div className="product mb-2 mx-auto ">
                    <img src={product7} alt="trend product" />
                </div>
                <div className="product mx-auto">
                    <img src={product8} alt="trend product" />
                </div>
            </div>
        </section>
    );
};

export default Suggest;
