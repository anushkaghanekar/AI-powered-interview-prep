import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
console.log("🔐 To Login component mounted");

const Login = ({ setCurrentPage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  //Handle Login Form Submit
  const handleLogin = async (e) => {
    e.preventDefault();
  };

  return ( <div className="w-[90vw] md:w-[33vw] p-9 flex flex-col justify-center">
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

      <p className="text-[13px] text-slate-900 mt-4">
        Don't have an account?{""}
        <button
          className="font-medium text-primary underline cursor-pointer"
          onClick={() => {
            setCurrentPage("signup");
          }}
        >
          SignUp
        </button>
      </p>
    </form>
  </div>
  );
};

export default Login;


































