import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import * as sessionActions from '../../store/session';
import './SignupForm.css';

const SignupFormPage = () => {
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    if (sessionUser) return <Redirect to="/"/>

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === confirmEmail) {
            setErrors([]);
            return dispatch(sessionActions.signup({email, name, password}))
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
        return setErrors([`The email addresses don't match`])
    }

    return (
        <div>
            <h1>Sign up with your email address</h1>
            <form onSubmit={handleSubmit} id='form'>
                <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>
                <label>What's your email? 
                    <br/>
                    <input
                        type="text"
                        value={confirmEmail}
                        onChange={(e) => setConfirmEmail(e.target.value)}
                        placeholder="Enter your email."
                        required
                    />
                </label>
                <label>Confirm your email 
                    <br/>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email again."
                        required
                    />
                </label>
                <label>Create a password 
                    <br/>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Create a password."
                        required
                    />
                </label>
                <label>What should we call you?
                    <br/>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter a profile name."
                        required
                    />
                </label>
                <p>This appears on your profile</p>
                <button id="submit-button"type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignupFormPage;