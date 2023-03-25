import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { setToken, setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    let url = `http://127.0.0.1:8000/api/login`;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
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
        <input type="text" ref={emailRef} />
      </p>
      <p>
        <label> Password </label>
        <input type="password" ref={passwordRef} required="required" />
      </p>

      <input type="submit" value="Login" />
    </form>
  );
}
