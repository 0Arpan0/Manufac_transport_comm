import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [type, setType] = useState();

  const sub = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        "http://localhost:5000/api/users/alluser",
        { email, password, type },
        config
      );

      localStorage.setItem("userInfo", JSON.stringify(res));
      history.push("/user");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={sub}>
        <label>email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <label>Type</label>
        <input value={type} onChange={(e) => setType(e.target.value)} />
        <br />
        <button type="submit">Push</button>
      </form>
    </div>
  );
}

export default Login;
