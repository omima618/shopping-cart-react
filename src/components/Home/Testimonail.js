import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Testimonials.css';
import { Navigation, Autoplay } from 'swiper';
import client1 from '../../assets/clients/customer1.webp';
import client2 from '../../assets/clients/customer2.webp';
import client3 from '../../assets/clients/customer3.webp';
import client4 from '../../assets/clients/customer4.webp';
const Testimonail = () => {
    return (
        <section className="testimonails py-5">
            <div className="container">
                <div className="heading text-center mb-5">
                    <h6 className="w-auto mx-auto">What our customers say</h6>
                    <h2 className="w-auto mx-auto">Testimonials</h2>
                </div>
                <Swiper
                    navigation={true}
                    freeMode={true}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                    }}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide className="px-5 d-flex flex-column flex-md-row justify-content-center align-items-center">
                        <div className="img-wrapper me-4 rounded-circle overflow-hidden">
                            <img src={client1} alt="client feedback" />
                        </div>
                        <div className="text-start feedback">
                            <p className="text-muted">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Maxime mollitia, molestiae
                                quas vel sint commodi repudiandae consequuntur
                                voluptatum laborum numquam blanditiis harum
                                quisquam eius sed odit fugiat iusto fuga
                                praesentium optio, eaque rerum! Provident
                                similique accusantium nemo autem.
                            </p>
                            <h6>Jhon Smith</h6>
                            <span>Manager</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="px-5 d-flex flex-column flex-md-row justify-content-center align-items-center">
                        <div className="img-wrapper me-4 rounded-circle overflow-hidden">
                            <img src={client2} alt="client feedback" />
                        </div>
                        <div className="text-start feedback">
                            <p className="text-muted">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Maxime mollitia, molestiae
                                quas vel sint commodi repudiandae consequuntur
                                voluptatum laborum numquam blanditiis harum
                                quisquam eius sed odit fugiat iusto fuga
                                praesentium optio, eaque rerum! Provident
                                similique accusantium nemo autem.
                            </p>
                            <h6>David Holzmer</h6>
                            <span>Developer</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="px-5 d-flex flex-column flex-md-row justify-content-center align-items-center">
                        <div className="img-wrapper me-4 rounded-circle overflow-hidden">
                            <img src={client3} alt="client feedback" />
                        </div>
                        <div className="text-start feedback">
                            <p className="text-muted">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Maxime mollitia, molestiae
                                quas vel sint commodi repudiandae consequuntur
                                voluptatum laborum numquam blanditiis harum
                                quisquam eius sed odit fugiat iusto fuga
                                praesentium optio, eaque rerum! Provident
                                similique accusantium nemo autem.
                            </p>
                            <h6>Jean Pierre</h6>
                            <span>Enginner</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="px-5 d-flex flex-column flex-md-row justify-content-center align-items-center">
                        <div className="img-wrapper me-4 rounded-circle overflow-hidden">
                            <img src={client4} alt="client feedback" />
                        </div>
                        <div className="text-start feedback">
                            <p className="text-muted">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Maxime mollitia, molestiae
                                quas vel sint commodi repudiandae consequuntur
                                voluptatum laborum numquam blanditiis harum
                                quisquam eius sed odit fugiat iusto fuga
                                praesentium optio, eaque rerum! Provident
                                similique accusantium nemo autem.
                            </p>
                            <h6>Tom Walker</h6>
                            <span>Designer</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonail;
