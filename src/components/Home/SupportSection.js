import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import photo from '../../assets/support.jpg';

const SupportSection = () => {
    const countValue = useSelector((state) => state.counter.count);

    return (
        <section className="support-sec py-5">
            <div className="container">
                <div className="heading text-center text-lg-start">
                    <h6 className="w-auto mx-auto">Support us</h6>
                    <h2 className="w-auto mx-auto  mb-md-5">lorem ipsum dolor</h2>
                </div>
                <div className="container d-flex flex-wrap justify-content-between">
                    <div className="text-wrapper text-center text-md-start py-5">
                        <h3 className="mb-4">Total Support ${countValue}</h3>
                        <p className="text-muted">
                            Consectetur adipisicing elit. Laborum fuga incidunt
                            laboriosam voluptas iure, delectus Consectetur
                            adipisicing elit. Laborum fuga incidunt laboriosam
                            voluptas iure, delectus
                        </p>
                        <Link to="/support" className="btn btn-outline-dark">
                            Support us
                        </Link>
                    </div>
                    <div className="img-wrapper text-center">
                        <img src={photo} alt="support us" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupportSection;
