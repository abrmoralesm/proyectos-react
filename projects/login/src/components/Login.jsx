import React from "react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";



function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {error && <Alert message={error} />}
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          placeholder='your email'
          id='email'
          onChange={handleChange}
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          placeholder='******'
          id='password'
          onChange={handleChange}
        />
        <button>Login</button>
      </form>

      <button onClick={handleGoogleSignin}>Google Login</button>
    </div>
  );
}

export default Login;
