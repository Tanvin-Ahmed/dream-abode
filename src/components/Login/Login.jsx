import React from 'react';
import './Login.css';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { getErrorMessage, getUserInfo, isLogin, loginLoading } from '../../app/actions/userActions';
import { createUSerWithEmailAndPassword, initializationLoginFramework, signInWithEmailAndPassword } from './loginManager';
import { useHistory, useLocation } from 'react-router';
import { Spinner } from 'react-bootstrap';

const Login = () => {
    initializationLoginFramework();

    const dispatch = useDispatch();

    const { login, error, loading } = useSelector(state => ({
        login: state.userReducer.isLogin,
        error: state.userReducer.errorMessage,
        loading: state.userReducer.loading
    }))

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleResponse = (res) => {
        dispatch(getErrorMessage(''));
        const user = {
            displayName: res.displayName,
            email: res.email
        }
        dispatch(getUserInfo(user));
        dispatch(loginLoading(false));
        history.replace(from);
    }

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        if (!login) {

            if (data.name.trim()) {

                dispatch(getErrorMessage(''));

                if (data.password.trim() === data.confirmPassword.trim()) {
                    dispatch(getErrorMessage(''));

                    dispatch(loginLoading(true));
                    createUSerWithEmailAndPassword(data.name, data.email, data.password)
                        .then(res => {
                            if (res.errorMessage) {
                                dispatch(getErrorMessage(res.errorMessage));
                                dispatch(loginLoading(false));
                            } else {
                                handleResponse(res);
                            }
                        })
                } else {

                    dispatch(getErrorMessage('Conform Password dose not match'));
                }
            } else {

                dispatch(getErrorMessage('Name is required'));
            }
        } else {

            dispatch(loginLoading(true));
            signInWithEmailAndPassword(data.email, data.password)
                .then(res => {
                    if (res.errorMessage) {
                        dispatch(getErrorMessage(res.errorMessage));
                        dispatch(loginLoading(false));
                    } else {
                        handleResponse(res);
                    }
                })
        }

    }

    return (
        <section className="login">
            <div className="form__container rounded">

                <div className="options">
                    <button onClick={() => dispatch(isLogin(true))} type="button" className={login ? "option__btn choose__option" : "option__btn"}>Log In</button>
                    <button onClick={() => dispatch(isLogin(false))} type="button" className={!login ? "option__btn choose__option" : "option__btn"}>Sign Up</button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {!login && <input className="form-control mb-2"  {...register("name", { required: true })} placeholder="Name" />}
                    {!login && errors.name && <span className="text-danger">Name is required</span>}

                    <input className="form-control mb-2" {...register("email", { required: true })} placeholder="Email" />
                    {errors.email && <span className="text-danger">This Email is required</span>}

                    <input type="password" className="form-control mb-2" {...register("password", { required: true })} placeholder="Password" />
                    {errors.password && <span className="text-danger">Password is required</span>}

                    {!login && <input type="password" className="form-control mb-2" {...register("confirmPassword", { required: true })} placeholder="ConfirmPassword" />}
                    {!login && errors.confirmPassword && <span className="text-danger">This Email is required</span>}

                    <div className="buttons">
                        {login ? <button className="login__btn" type="submit">Log In</button>
                            : <button className="login__btn" type="submit">Sign Up</button>}
                    </div>
                </form>
                <div className="mt-2">
                    {error && <small className="text-danger text-center">{error}</small>}
                </div>
                {
                  loading && <div className="loadingSpinner text-center">
                        <Spinner animation="grow" size="sm" />{' '}
                        <Spinner animation="grow" size="sm" />
                    </div>
                }
            </div>
        </section>
    );
};

export default Login;