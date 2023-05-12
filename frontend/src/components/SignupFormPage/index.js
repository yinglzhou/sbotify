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
                    if (data?.errors) {
                        setErrors(data.errors);
                        if (name.length < 1) {
                            setErrors((prevErrors) => [...prevErrors, "Please enter a name"]);
                        }
                        setFieldErrors(data.errors);
                    } else if (data) {
                        setErrors(data);
                        if (name.length < 1) {
                            setErrors((prevErrors) => [...prevErrors, "Please enter a name"]);
                        }
                    }
                    else setErrors([res.statusText]);
                });
        }
        setErrors([`The email addresses don't match`])
        setFieldErrors({confirmEmail: `The email addresses don't match`})
        return  
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

                <div className="all-labels">
                <div className="labels">
                    <label>What's your email?</label>
                        <input
                            type="text"
                            value={confirmEmail}
                            onChange={(e) => setConfirmEmail(e.target.value)}
                            placeholder="Enter your email."
                            />

                    <ul className="errors">
                        {errors
                        .filter((error)=> error.includes("Email") || error.includes("addresses"))
                        .map((error, index) =>
                            <div key={index}>
                                <li>{error}</li>
                            </div>
                        )}
                    </ul>
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
                        <ul className="errors">
                        {errors
                        .filter((error)=> error.includes("addresses"))
                        .map((error, index) =>
                            <div key={index}>
                                <li>{error}</li>
                            </div>
                        )}
                    </ul>
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
                    <ul className="errors">
                        {errors
                        .filter((error)=> error.includes("Password"))
                        .map((error, index) =>
                            <div key={index}>
                                <li>{error}</li>
                            </div>
                        )}
                    </ul>
                </div>

                <div className="labels">
                    <label>What should we call you?</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter a profile name."
                        />
                        <ul className="errors">
                        {errors
                        .filter((error)=> error.includes("name"))
                        .map((error, index) =>
                            <div key={index}>
                                <li>{error}</li>
                            </div>
                        )}
                    </ul>
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