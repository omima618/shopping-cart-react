import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import photo from '../../assets/support.jpg';

const SupportSection = () => {
    const countValue = useSelector((state) => state.counter.count);

    return (
        <section className="support-sec py-5">
            <div className="container">
                <div className="heading text-center">
                    <h6 className="w-auto mx-auto">lorem ipsum</h6>
                    <h2 className="w-auto mx-auto  mb-md-5">Support us</h2>
                </div>
                <div className="container d-flex flex-wrap justify-content-between align-items-center">
                    <div className="text-wrapper text-center text-md-start py-5">
                        <h3 className="mb-4">Total Support $ {countValue}</h3>
                        <p className="text-muted">
                            Consectetur adipisicing elit. Laborum fuga incidunt
                            laboriosam voluptas iure, delectus Consectetur
                            adipisicing elit. Laborum fuga incidunt laboriosam
                            voluptas iure, delectus Consectetur adipisicing
                            elit. Laborum fuga incidunt laboriosam voluptas
                            iure, delectus Consectetur adipisicing elit. Laborum
                            fuga incidunt laboriosam voluptas iure, delectus
                        </p>
                        <Link to="/support" className="btn btn-dark px-4">
                            Support us
                        </Link>
                    </div>
                    <div className="img-wrapper text-center">
                        <img
                            src={photo}
                            alt="support us"
                            className="w-100 support-img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SupportSection;
