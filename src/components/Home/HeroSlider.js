import { EffectFade, Navigation, Autoplay, Lazy } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './HeroSlider.css';
import { Link } from 'react-router-dom';
const HeroSlider = () => {
    return (
        <section className="hero">
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 5000,
                }}
                lazy={true}
                modules={[EffectFade, Navigation, Autoplay, Lazy]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <div className="slide1">
                        <div className="content">
                            <h6>fashion sale</h6>
                            <h1>BROWSE OUR PREMIUM PRODUCT</h1>
                            <p>
                                Us which over of signs divide dominion deep fill
                                bring they're meat beho upon own earth without
                                morning over third. Their male dry. They are
                                great appear whose land fly
                            </p>
                            <Link to="/shop" className="btn btn-dark px-5">
                                Shop now
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="slide2">
                        <div className="content ms-auto">
                            <h6>fashion sale</h6>
                            <h1>Up To 50% Off</h1>
                            <p>
                                Us which over of signs divide dominion deep fill
                                bring they're meat beho upon own earth without
                                morning over third. Their male dry. They are
                                great appear whose land fly
                            </p>
                            <Link to="/shop" className="btn btn-dark px-5">
                                Shop now
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};
export default HeroSlider;
