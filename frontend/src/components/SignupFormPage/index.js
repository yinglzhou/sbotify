import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
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
    const [fieldErrors, setFieldErrors] = useState({
        email:"",
        confirmEmail:"",
        name: "",
        password: ""
    })

    if (sessionUser) return <Redirect to="/"/>

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === confirmEmail) {
            setFieldErrors({
                email: "",
                confirmEmail: "",
                name: "",
                password: ""
            })
            setErrors([]);
            return dispatch(sessionActions.signup({email, name, password}))
                .catch(async (res) => {
                    let data;
                    try {
                        data = await res.clone().json();
                    } catch {
                        data = await res.text();
                    }
                    if (data?.errors) setFieldErrors()
                    // setErrors(data.errors);
                    else if (data) setErrors([data]);
                    else setErrors([res.statusText]);
                });
        }
        return setErrors([`The email addresses don't match`])
    }

    return (
        <div className="signup-form-container">
            <Link to="/">
                <img className="icon"
                    src={require('./assets/spot-logo-black.png')}
                />
            </Link>
            
            <h1>Sign up with your email address</h1>
            <form onSubmit={handleSubmit} id='form'>
                <ul className="errors">
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>

                <div className="all-labels">
                <div className="labels">
                    <label>What's your email?</label>
                        <input
                            type="text"
                            value={confirmEmail}
                            onChange={(e) => setConfirmEmail(e.target.value)}
                            placeholder="Enter your email."
                            // required
                            />
                </div>
                <div className="labels">
                    <label>Confirm your email</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email again."
                            // required
                        />
                </div>

                <div className="labels">
                    <label>Create a password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Create a password."
                            // required
                        />
            
                </div>

                <div className="labels">
                    <label>What should we call you?</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter a profile name."
                            // required
                        />
                    <p>This appears on your profile.</p>
                </div>

                </div>
                <button id="submit-button"type="submit">Sign Up</button>

                <div id="account-ask">
                    <p>Have an account? 
                        <a href="/login"> Log in</a>.
                    </p>
                </div>
                
            </form>
        </div>
    )
}

export default SignupFormPage;