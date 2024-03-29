import React from "react";
import "./Login.css";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  console.log(useAuth0);
  const { loginWithRedirect } = useAuth0(); //destructuring is better

  return (
    <div className="login">
      <h1>To get started please Login!</h1>
      <button onClick={() => loginWithRedirect()}>Login</button>
    </div>
  );
}

export default Login;
