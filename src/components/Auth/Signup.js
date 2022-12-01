import { useForm, Controller } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../Store/auth';

const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authStatus = useSelector((state) => state.auth.isLoggedin);
    const animatedComponents = makeAnimated();
    // F O R M   C O N T R O L
    const {
        control,
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const submitHandler = (data) => {
        dispatch(authActions.authStatus(true));
        localStorage.setItem('isLoggedin', !authStatus);
        navigate('/shop');
    };
    // S E L E C T    O P T I O N S
    const options = [
        {
            value: 1,
            label: 'Men Fashion',
        },
        {
            value: 2,
            label: 'Women fashion',
        },
        {
            value: 3,
            label: 'Electronic',
        },
        {
            value: 4,
            label: 'Cosmetics',
        },
        {
            value: 5,
            label: 'Jewelry',
        },
        {
            value: 6,
            label: 'Books',
        },
    ];
    return (
        <div className="container py-5">
            <h2 className=" mb-3 mx-auto">Signup</h2>
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
                {/* U S E R N A M E */}
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Username"
                        {...register('username', { required: true })}
                        aria-invalid={errors.username ? true : false}
                    />
                    {errors.username?.type === 'required' && (
                        <Form.Text className="text-danger">
                            username is required.
                        </Form.Text>
                    )}
                </Form.Group>
                {/* P H O N E */}
                <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Phone Number"
                        {...register('phone', {
                            required: true,
                            minLength: 10,
                        })}
                        aria-invalid={errors.phone ? 'true' : 'false'}
                    />
                    {errors.phone?.type === 'required' && (
                        <Form.Text className="text-danger">
                            Phone Number is required.
                        </Form.Text>
                    )}
                    {/*R E M E M B E R    M E */}
                </Form.Group>
                {/* F A V    C A T E G O R I E S */}
                <Form.Group className="mb-3" controlId="formSelect">
                    <Form.Label>Favorite Categories</Form.Label>
                    <Controller
                        name="select"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={options}
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                isMulti
                                {...register}
                            />
                        )}
                    />
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
                            minLength is 8 characters.
                        </Form.Text>
                    )}
                    {errors.password?.type === 'maxLength' && (
                        <Form.Text className="text-danger">
                            maxLength is 20 characters.
                        </Form.Text>
                    )}
                </Form.Group>
                {/* C O N F I R M    P A S S W O R D */}
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        {...register('confPassword', {
                            validate: (val) => {
                                if (watch('password') !== val) {
                                    return 'Your passwords is not match';
                                }
                            },
                        })}
                        aria-invalid={errors.confPassword ? 'true' : 'false'}
                    />
                    {errors.confPassword?.type === 'validate' && (
                        <Form.Text className="text-danger">
                            password is not match.
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
                    Signup
                </Button>
                {/* L O G I N */}
                <div className="text-muted text-center mt-3">
                    Already have account?
                    <Link to="/login"> Login</Link>
                </div>
            </Form>
        </div>
    );
};

export default Signup;
