import error404 from './not_found.png';
import Style from '../Home/Style.module.css';
const NotFound = () => {
    return (
        <div className={`text-center container px-5 ${Style['error-wrapper']}`}>
            <img src={error404} alt="error 404 page not founs" />
            <h1 className="mx-auto my-2">OOPS !</h1>
            <h2 className="mx-auto mb-2">404 Not Found</h2>
            <p className="mx-auto text-muted">
                The page you are looking for does not exist !
            </p>
        </div>
    );
};

export default NotFound;
