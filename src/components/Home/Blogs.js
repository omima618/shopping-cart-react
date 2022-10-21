import { Link } from 'react-router-dom';
import blog1 from '../../assets/blogs/blog1.webp';
import blog2 from '../../assets/blogs/blog2.webp';
import blog3 from '../../assets/blogs/blog3.webp';
const Blogs = () => {
    return (
        <section className="blogs py-5">
            <div className="container">
                <div className="heading text-center mb-5">
                    <h6 className="w-auto mx-auto">Blogs</h6>
                    <h2 className="w-auto mx-auto">Latest News</h2>
                </div>
                <div className="d-flex flex-wrap align-items-center justify-content-md-between justify-content-center">
                    <div className="blog mb-4 mb-lg-0 position-relative rounded-3 overflow-hidden">
                        <img src={blog1} alt="blog" />
                        <div className="p-3 bg-light">
                            <h4 className="fs-5 mb-3">
                                Vogue's Ultimate Guide To Autumn Winter 2019
                                Shoes
                            </h4>
                            <p className="text-muted">
                                Consectetur adipisicing elit. Laborum fuga
                                incidunt laboriosam voluptas iure, delectus..
                            </p>
                            <Link
                                to="/shop"
                                className="text-decoration-underline text-danger d-block text-center"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                    <div className="blog mb-4 mb-lg-0 position-relative mb-lg-0 rounded-3 overflow-hidden">
                        <img src={blog2} alt="blog" />
                        <div className="p-3 bg-light">
                            <h4 className="fs-5 mb-3">
                                Vogue's Ultimate Guide To Autumn Winter 2019
                                Shoes
                            </h4>
                            <p className="text-muted">
                                Consectetur adipisicing elit. Laborum fuga
                                incidunt laboriosam voluptas iure, delectus..
                            </p>
                            <Link
                                to="/shop"
                                className="text-decoration-underline text-danger d-block text-center"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                    <div className="blog position-relative rounded-3 overflow-hidden">
                        <img src={blog3} alt="blog" />
                        <div className="p-3 bg-light">
                            <h4 className="fs-5 mb-3">
                                Vogue's Ultimate Guide To Autumn Winter 2019
                                Shoes
                            </h4>
                            <p className="text-muted">
                                Consectetur adipisicing elit. Laborum fuga
                                incidunt laboriosam voluptas iure, delectus..
                            </p>
                            <Link
                                to="/shop"
                                className="text-decoration-underline text-danger d-block text-center"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
