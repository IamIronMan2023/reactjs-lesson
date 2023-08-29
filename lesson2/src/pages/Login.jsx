import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //long hand way
  // const { setToken, setIsAuthenticated } = useContext(AuthContext);
  const { setToken, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    const url = `${import.meta.env.VITE_API_URL}/login`;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    const fetchResponse = await fetch(url, requestOptions);

    if (fetchResponse.status === 200) {
      let data = await fetchResponse.json();
      setIsAuthenticated(true);
      setToken(data.token);
      navigate("/");
    } else {
      alert("Incorrect credential");
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <p>
        <label> Email </label>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required="required"
        />
      </p>
      <p>
        <label> Password </label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </p>

      <input type="submit" value="Login" />
    </form>
  );
};

export default Login;
