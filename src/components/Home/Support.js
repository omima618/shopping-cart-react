import Style from './Style.module.css';
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../Store/counter';
const Support = () => {
    const inputRef = useRef();
    const dispatch = useDispatch();
    const countValue = useSelector((state) => state.counter.count);
    const showAlert = useSelector((state) => state.counter.showAlert);
    // I N C R E A S E
    const increaseHandler = () => {
        dispatch(counterActions.increase(+inputRef.current.value));
        showAlert && dispatch(counterActions.controlAlert());
        inputRef.current.value = 1;
    };
    // I N C R E M E N T
    const incrementHandler = () => {
        dispatch(counterActions.increment());
        showAlert && dispatch(counterActions.controlAlert());
    };
    // D E C R E M E N T
    const decrementHandler = () => {
        countValue === 0
            ? dispatch(counterActions.controlAlert())
            : dispatch(counterActions.decrement());
    };
    // R E S E T
    const resetHandler = () => {
        dispatch(counterActions.reset());
        showAlert && dispatch(counterActions.controlAlert());
    };
    // A L E R T
    const closeAlertHandler = () => {
        dispatch(counterActions.controlAlert());
    };
    return (
        <div
            className={`${Style['wrapper']} container d-flex justify-content-center align-items-center`}
        >
            <div
                className={`${Style['counter-card']} shadow rounded-5 p-5 w-auto`}
            >
                <div className="mb-2 d-flex flex-wrap justify-content-evenly">
                    <label className="d-block w-100 mb-3 fw-bold">
                        Enter amount
                    </label>
                    <input
                        type="number"
                        min={1}
                        step={1}
                        defaultValue={1}
                        ref={inputRef}
                        className="btn btn-dark shadow-none bg-dark fs-5 "
                    />
                    <button
                        onClick={increaseHandler}
                        className={`ms-3 btn btn-dark bg-dark fs-5`}
                    >
                        Increase
                    </button>
                </div>
                <div className="d-flex flex-wrap justify-content-between align-items-center px-3">
                    <h4 className="w-100 my-4 text-center">
                        Support US : ${' '}
                        <span className="mx-2">{countValue}</span>
                    </h4>
                    <button
                        onClick={incrementHandler}
                        className="btn btn-outline-success fw-bold"
                    >
                        +
                    </button>
                    <button
                        onClick={resetHandler}
                        className="btn btn-outline-dark fw-bold"
                    >
                        Reset
                    </button>
                    <button
                        onClick={decrementHandler}
                        className="btn btn-outline-danger fw-bold"
                    >
                        -
                    </button>
                    {showAlert && (
                        <p className="w-100 text-danger text-center mt-4 py-4 shadow rounded-3">
                            <span className="fs-5">
                                {' '}
                                You can't decrement below zero ❗
                            </span>
                            <br />
                            <button
                                onClick={closeAlertHandler}
                                className="btn btn-danger mt-3"
                            >
                                Cancel
                            </button>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Support;
