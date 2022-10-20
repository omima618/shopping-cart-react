// Import Swiper React components
import { EffectFade, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './HeroSlider.css';

const HeroSlider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 5000,
                }}
                modules={[EffectFade, Navigation, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="slide1">
                        <div className="content">
                            <h6>fashion sale</h6>
                            <h1>BROWSE OUR PREMIUM PRODUCT</h1>
                            <p>
                                Us which over of signs divide dominion deep fill
                                bring they're meat beho upon own earth without
                                morning over third. Their male dry. They are
                                great appear whose land fly .
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide2">
                        <div className="content ms-auto">
                            <h6>fashion sale</h6>
                            <h1>Up To 50% Off</h1>
                            <p>
                                Us which over of signs divide dominion deep fill
                                bring they're meat beho upon own earth without
                                morning over third. Their male dry. They are
                                great appear whose land fly .
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};
export default HeroSlider;
