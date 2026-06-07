import React from "react";
import "./Login.css";
import { IoLogInOutline } from "react-icons/io5";

function Login() {
  return (
    <div id="login">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Login Successfully...👍");
        }}
      >
        <h1 id="logintitle">Welcome Back 👋</h1>
        <p id="subtitle">Login to continue exploring properties</p>

        <div className="list">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="list">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" id="loginbtn">
          Login <IoLogInOutline />
        </button>

        <span id="bottomtext">
          Don't have an account? <a href="/signup">Sign Up</a>
        </span>
      </form>
    </div>
  );
}

export default Login;