import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
console.log("🔐 To Login component mounted");

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  //Handle Login Form Submit
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }
    
    setError("");

    { /* Login API Call */ }
    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });

      const { token } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong Please try again");
      }
    }
  };

  return ( 
  <div className="w-full max-w-md mx-auto px-6 py-9 flex flex-col justify-center">
    <h3 className="text-lg font-semibold text-black">Welcome Back</h3>
    <p className="text-xs text-slate-900 mt-[4px] mb-9">
      Please enter your details to log in
    </p>

    <form onSubmit={handleLogin}>
      <Input
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        label="Email Address"
        placeholder="john@example.com"
        type="text"
      />

      <Input
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        label="Password"
        placeholder="Min 8 Characters"
        type="password"
      />

      {error && <p className="text-red-400 text-xs pb-2.9">{error}</p>}

      <button type="submit" className="btn-primary">
        LOGIN
      </button>

      <p className="text-sm text-slate-900 mt-4 flex items-center gap-1">
  Don’t have an account?
  <button
    className="font-medium text-primary underline cursor-pointer"
    onClick={() => {
      setCurrentPage("signup");
    }}
  >
    Sign up
  </button>
</p>

    </form>
  </div>
  );
};

export default Login;


































