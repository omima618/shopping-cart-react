import { Link } from 'react-router-dom';
import { BsFillCartFill, BsFillHeartFill } from 'react-icons/bs';
const ProductControls = () => {
    return (
        <>
            <Link to="/cart" className="text-success me-4">
                <BsFillCartFill className="fs-4" />
            </Link>
            <Link to="/wishlist" className="text-danger">
                <BsFillHeartFill className="fs-4" />
            </Link>
        </>
    );
};

export default ProductControls;
