import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../Store/auth';
import ReactDOM from 'react-dom';
const ALertMessage = () => {
    const showAlert = useSelector((state) => state.auth.showAlert);
    const dispatch = useDispatch();
    const closeModalHandler = () => {
        dispatch(authActions.showAlert(false));
    };
    return (
        <>
            {showAlert && (
                <div onClick={closeModalHandler} className="overlay"></div>
            )}
            <Alert
                show={showAlert}
                variant="danger p-4 mx-auto position-fixed top-50 start-50 translate-middle"
            >
                <Alert.Heading className="fs-3 mb-3">
                    You are not a member !
                </Alert.Heading>
                <div>
                    <p className="mb-0">
                        You can't add products to cart or wishlist if your not a
                        member to explore more products and shop now
                    </p>
                    <br />
                    <span>
                        Create new account
                        <Link
                            onClick={closeModalHandler}
                            to="/signup"
                            className="text-dark ms-2 text-decoration-underline fw-bold my-2"
                        >
                            Signup
                        </Link>
                    </span>
                    <br />
                    <span>
                        ALready have account?
                        <Link
                            onClick={closeModalHandler}
                            to="/login"
                            className="text-dark ms-2 text-decoration-underline fw-bold my-2"
                        >
                            Login
                        </Link>
                    </span>
                </div>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button
                        onClick={closeModalHandler}
                        variant="outline-danger"
                    >
                        close
                    </Button>
                </div>
            </Alert>
        </>
    );
};
const AuthAlert = () => {
    return (
        <>
            {ReactDOM.createPortal(
                <ALertMessage />,
                document.getElementById('overlay')
            )}
        </>
    );
};
export default AuthAlert;
