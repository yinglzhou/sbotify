import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import * as sessionActions from '../../store/session'
import './LoginForm.css';

const LoginFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to='/'/>
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({email, password}))
        .catch(async (res) => {
            let data;
            try {
                data = await res.clone().json();
            } catch {
                data = await res.text();
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
        });
    }

    return (
        <div className="signup-form-container">
            <Link to="/">
                <img className="icon"
                    src={require('./assets/spot-logo-black.png')}
                />
            </Link>

            <h1>To continue, log in to Spotify.</h1>

            <form>
                <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>

                <div className="all-labels">
                <div className="labels">
                <label>Email address</label>
                    <input
                        type="text"
                        value={email}
                        placeholder="Email address"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

            <div className="labels">
                <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
            </div>
                </div>
                <button id="login-submit-button"onClick={handleSubmit}>LOG IN</button>
                
            </form>
        </div>
    )
}

export default LoginFormPage;