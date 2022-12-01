import { useForm, Controller } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../Store/auth';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authStatus = useSelector((state) => state.auth.isLoggedin);
    // F O R M   C O N T R O L
    const {
        control,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const submitHandler = (data) => {
        dispatch(authActions.authStatus(true));
        localStorage.setItem('isLoggedin', !authStatus);
        navigate('/shop');
    };
    return (
        <div className="container py-5">
            <h2 className=" mb-3 mx-auto">Login</h2>
            <Form
                onSubmit={handleSubmit(submitHandler)}
                className="mx-auto border p-4 rounded-2"
            >
                {/* E M A I L  */}
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        {...register('email', { required: true })}
                        aria-invalid={errors.email ? true : false}
                        className=""
                    />
                    {errors.email?.type === 'required' && (
                        <Form.Text className="text-danger">
                            Email is required.
                        </Form.Text>
                    )}
                </Form.Group>
                {/* P A S S W O R D */}
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        {...register('password', {
                            required: true,
                            minLength: 8,
                            maxLength: 20,
                        })}
                        aria-invalid={errors.password ? 'true' : 'false'}
                    />
                    {errors.password?.type === 'required' && (
                        <Form.Text className="text-danger">
                            password is required.
                        </Form.Text>
                    )}
                    {errors.password?.type === 'minLength' && (
                        <Form.Text className="text-danger">
                            Enter correct password.
                        </Form.Text>
                    )}
                    {errors.password?.type === 'maxLength' && (
                        <Form.Text className="text-danger">
                            Enter correct password.
                        </Form.Text>
                    )}
                </Form.Group>
                {/* C H E C K B O X */}
                <Form.Group className="mb-3" controlId="formCheckbox">
                    <Controller
                        name="checkbox"
                        control={control}
                        render={({ field }) => (
                            <Form.Check
                                {...field}
                                type="checkbox"
                                label="Remember me"
                                {...register}
                            />
                        )}
                    />
                </Form.Group>
                {/* S U B M I T */}
                <Button
                    variant="dark px-5 fw-bold mx-auto d-block w-auto"
                    type="submit"
                >
                    Login
                </Button>
                {/* S I G N U P */}
                <div className="text-muted text-center mt-3">
                    Don't have account?
                    <Link to="/signup"> Signup</Link>
                </div>
            </Form>
        </div>
    );
};

export default Login;
