import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const navigate = useNavigate()
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleEmail = (e)=>{
        setEmail(e.target.value);
    }


    const handlePassword = (e)=>{
        setPassword(e.target.value);
    }

    const handleApi = ()=>{
        console.log({email,password});
        axios.post('https://reqres.in/api/login',{
            email : email,
            password : password
        })
        .then(result=>{
            console.log(result.data);
            // alert("Success");
            localStorage.setItem('token',result.data.token)
            navigate('/')
        })
        .catch(error=>{
            alert("Wrong credentials ");
        })
    }
  return (
    <div className="parent-login">

    <div className="container-fluid login-css" style={{width:'50%',color:'black'}}>
      
        <h3>Login</h3>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={handleEmail}
            placeholder="enter your mail"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={handlePassword}
            placeholder="enter your password"
          />
        </div>
          <button  className="btn btn-dark" onClick={handleApi}>
            Login
          </button>
         
      
    </div>
            </div>
  );
}
