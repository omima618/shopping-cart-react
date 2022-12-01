import HeroSlider from './HeroSlider';
import TrendingProduct from './TrendingProduct';
import SupportSection from './SupportSection';
import Footer from './Footer';
import Suggest from './Suggest';
import Banner from './Banner';
import Categories from './Categories';
import Blogs from './Blogs';
import Testimonail from './Testimonail';

const Home = () => {
    return (
        <section>
            <HeroSlider />
            <TrendingProduct />
            <SupportSection />
            <Categories />
            <Banner />
            <Suggest />
            <Blogs />
            <Testimonail />
            <Footer />
        </section>
    );
};

export default Home;
