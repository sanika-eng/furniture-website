import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../Style/Login.css'; // Make sure to import your CSS file

function Signup() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validateForm = () => {
        if (!email || !password) {
            setErrorMessage('Please fill in all fields');
            return false;
        }
        // Add more validations as needed (e.g., email format, password strength)
        return true;
    }

    async function submit(e) {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const response = await axios.post("http://localhost:8000/signup", {
                email,
                password
            });

            if (response.data === "exist") {
                alert("User already exists");
            } else if (response.data === "notexist") {
                navigate("/", { state: { id: email } });
                alert("Thank you for sign up");
            }
        } catch (error) {
            setErrorMessage('Something went wrong. Please try again.');
            console.error(error);
        }
    }

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Signup</h2>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <form onSubmit={submit}>
                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <input type="submit" value="Signup" />
                    </div>
                </form>
                <br />
                <p>OR</p>
                <br />
                <Link to="/login">Login Page</Link>
            </div>
        </div>
    );
}

export default Signup;
