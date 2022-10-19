import { useSelector } from 'react-redux';

const Home = () => {
    const countValue = useSelector((state) => state.counter.count);
    return (
        <section className="py-5">
            <div className="conatiner text-center fs-3">
                Total Support : $ {countValue}
            </div>
        </section>
    );
};

export default Home;
