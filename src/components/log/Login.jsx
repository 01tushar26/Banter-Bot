import React, { useState } from 'react';
import './Login.css';
import { account } from '../../appwite/auth'; 

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSignup) {
        if (formData.password !== formData.confirmPassword) {
          alert("Passwords do not match.");
          return;
        }

        // Create user account
        await account.create(
          `unique()`, // use Appwrite's unique ID generator
          formData.email,
          formData.password,
          formData.name
        );

        // Then log them in
        await account.createEmailSession(formData.email, formData.password);
        alert("Signup and login successful!");
      } else {
        // Login existing user
        await account.createEmailSession(formData.email, formData.password);
        alert("Login successful!");
      }

      // Redirect or show home page here
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <h1 className="gradient-text">
          {isSignup ? 'Join the Banter!' : 'Welcome Back Dev!'}
        </h1>
        <p className="subtext">
          {isSignup
            ? 'Fill in your details to create a new account.'
            : 'Enter your credentials to access your account.'}
        </p>
      </div>

      <div className="login-right">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>

          {isSignup && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {isSignup && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          )}

          <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>

          <p className="footer-text">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <span
              onClick={() => setIsSignup(!isSignup)}
              style={{ cursor: 'pointer', fontWeight: 'bold', color: '#070707' }}
            >
              {isSignup ? 'Login' : 'Sign up'}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

