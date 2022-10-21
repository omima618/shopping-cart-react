import { Link } from 'react-router-dom';
import './Home.css'
const Banner = () => {
    return (
        <section className="banner py-5">
            <div className="container">
                <h2 className="mb-3">Up To 50% Off</h2>
                <h5 className="mb-3v fs-6">Winter Sale</h5>
                <p className="text-secondary">
                    onsectetur adipisicing elit. <br /> Laborum fuga incidunt
                    laboriosam
                </p>
                <Link to="/shop" className="btn btn-dark px-4">
                    Shop Now
                </Link>
            </div>
        </section>
    );
};

export default Banner;
