import React, { useState } from 'react';
import "./Login.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { loginSuccess } from '../../Redux/Login/Action';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleAdd = () => {
    const data = {
      email: email,
      password: password
    };

    console.log("Sending login data:", JSON.stringify(data));

    axios.post("https://reqres.in/api/login", {
      email: "eve.holt@reqres.in",
      password: "cityslicka"
    }, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1"
      }
    })
      .then((res) => {
        console.log("Login success! Token:", res.data.token);
        dispatch(loginSuccess({ email, token: res.data.token }));
        navigate("/");
      })
      .catch((err) => {
        console.error("Login failed:", err.response?.data || err.message);
        alert("Invalid email or password");
      });
  };

  return (
    <div>
      <div className='LoginHeading'>
        <p>DASHBOARD <hr /> <br /> Login here ..</p>
      </div>

      <div className='LoginDiv'>
        <input
          type="text"
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        /> <br /><br />
        <input
          type="password"
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        /> <br /><br />
        <button onClick={handleAdd}>Login</button>
      </div>
    </div>
  );
};

export default Login;
