import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './CategoriesSlider.css';
import { FreeMode, Autoplay } from 'swiper';
import category1 from '../../assets/categories/men-fashion.png';
import category2 from '../../assets/categories/women-fashion.png';
import category3 from '../../assets/categories/accessories.png';
import category4 from '../../assets/categories/cosmetics.png';
import category5 from '../../assets/categories/jewellery.png';
import category6 from '../../assets/categories/games.png';
import category7 from '../../assets/categories/electronic.png';
import category8 from '../../assets/categories/book.png';
const Categories = () => {
    return (
        <section className="categories pb-5">
            <div className="heading text-center my-5">
                <h6 className="w-auto mx-auto">Top Categories</h6>
                <h2 className="w-auto mx-auto">Categories</h2>
            </div>
            <div className="container">
                <Swiper
                    slidesPerView={6}
                    spaceBetween={50}
                    freeMode={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        500: {
                            slidesPerView: 3,
                            spaceBetween: 25,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                        1200: {
                            slidesPerView: 6,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[FreeMode, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={category1} alt="categories" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={category2} alt="categories" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={category3} alt="categories" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={category4} alt="categories" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={category5} alt="categories" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={category6} alt="categories" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={category7} alt="categories" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={category8} alt="categories" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Categories;
