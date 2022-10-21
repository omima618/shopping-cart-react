import gallery1 from '../../assets/footer/img-1.jpg';
import gallery2 from '../../assets/footer/img-2.jpg';
import gallery3 from '../../assets/footer/img-3.jpg';
import gallery4 from '../../assets/footer/img-4.jpg';
import gallery5 from '../../assets/footer/img-5.jpg';
import gallery6 from '../../assets/footer/img-6.jpg';
import gallery7 from '../../assets/footer/img-7.jpg';
import gallery8 from '../../assets/footer/img-8.jpg';
import gallery9 from '../../assets/footer/img-9.jpg';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="bg-dark text-light py-3">
            <div className="container">
                <div className="row border-bottom pb-4 ">
                    <div className="col-12 col-md-6 mb-5 mb-lg-0 px-3">
                        <h3 className="fw-bolder">Our Mission</h3>
                        <p className="text-muted opacity-75 lh-lg border-bottom pb-4">
                            So seed seed green that winged cattle in. Gathering
                            thing made fly you're no divided deep moved us lan
                            Gathering thing us land years living. So seed seed
                            green that winged cattle in. Gathering thing made
                            fly you're no divided deep moved us lan Gathering
                            thing us land years living.
                        </p>
                        <div className="mb-4">
                            <span className="fst-italic me-2 fs-5 text-light">
                                Follow Me:
                            </span>
                            <a
                                className="mx-2 fs-5"
                                href="https://www.facebook.com/omima.khaled.330"
                                target={'blank'}
                            >
                                <BsFacebook />
                            </a>
                            <a
                                className="mx-2 fs-5"
                                href="https://www.instagram.com/omima560/"
                                target={'blank'}
                            >
                                <BsInstagram />
                            </a>
                            <a
                                className="mx-2 fs-5"
                                href="https://twitter.com/Omima330"
                                target={'blank'}
                            >
                                <BsTwitter />
                            </a>
                            <a
                                className="mx-2 fs-5"
                                href="https://www.linkedin.com/in/omima-khaled-frontend-dev/"
                                target={'blank'}
                            >
                                <BsLinkedin />
                            </a>
                            <a
                                className="mx-2 fs-5"
                                href="https://github.com/omima618"
                                target={'blank'}
                            >
                                <BsGithub />
                            </a>
                        </div>
                        <form className="position-relative ">
                            <input
                                type="email "
                                placeholder="Your Email..."
                                className="shadow-sm border-0"
                            />
                            <button className="position-absolute border-0">
                                Subscribe
                            </button>
                        </form>
                    </div>
                    <div className="col-12 col-md-6">
                        <h5 className="p-0 mx-0 mb-3">INSTAGRAM</h5>
                        <div className="row g-0">
                            <figure className="col-3 m-0">
                                <img
                                    className="w-100"
                                    src={gallery4}
                                    alt="blog"
                                />
                            </figure>
                            <figure className="col-3 m-0">
                                <img
                                    className="w-100"
                                    src={gallery5}
                                    alt="blog"
                                />
                            </figure>
                            <figure className="col-3 m-0">
                                <img
                                    className="w-100"
                                    src={gallery6}
                                    alt="blog"
                                />
                            </figure>
                            <figure className="col-3 m-0">
                                <img
                                    className="w-100"
                                    src={gallery7}
                                    alt="blog"
                                />
                            </figure>
                            <figure className="col-3 m-0">
                                <img
                                    className="w-100"
                                    src={gallery8}
                                    alt="blog"
                                />
                            </figure>
                            <figure className="col-3 m-0">
                                <img
                                    className="w-100"
                                    src={gallery9}
                                    alt="blog"
                                />
                            </figure>
                            <figure className="col-3 m-0">
                                <img
                                    className="w-100"
                                    src={gallery1}
                                    alt="blog"
                                />
                            </figure>
                            <figure className="col-3 m-0">
                                <img
                                    className="w-100"
                                    src={gallery2}
                                    alt="blog"
                                />
                            </figure>
                            <figure className="col-3 m-0">
                                <img
                                    className="w-100"
                                    src={gallery3}
                                    alt="blog"
                                />
                            </figure>
                            <figure className="col-3 m-0">
                                <img
                                    className="w-100"
                                    src={gallery4}
                                    alt="blog"
                                />
                            </figure>
                            <figure className="col-3 m-0">
                                <img
                                    className="w-100"
                                    src={gallery5}
                                    alt="blog"
                                />
                            </figure>
                            <figure className="col-3 m-0">
                                <img
                                    className="w-100"
                                    src={gallery6}
                                    alt="blog"
                                />
                            </figure>
                            <Link
                                to="/shop"
                                className="text-center fst-italic fs-6 mt-2"
                            >
                                View more photos
                            </Link>
                        </div>
                    </div>
                </div>
                <p className="text-center fw-bold mt-3 m-0">
                    copyright 2022 created by
                    <span className="my-name"> Omima Khaled</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
