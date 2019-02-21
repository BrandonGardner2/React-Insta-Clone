import React, { useState } from "react";
import IGLogo from "../../assets/iglogo.png";
import "./LogIn.css";

const LogInPage = props => {
  const [userText, updateUserText] = useState("");
  const [passwordText, updatePasswordText] = useState("");

  const updateAuth = e => {
    e.preventDefault();
    if (userText !== "" && passwordText !== "") {
      // localStorage.setItem("user", userText);
      // localStorage.setItem("password", passwordText);
      localStorage.setItem(
        "token",
        JSON.stringify({
          user: userText,
          password: passwordText,
          now: Date.now(),
          ttl: 600000
        })
      );
      props.updateAuthenticated(props.getAuth());
    } else {
      alert("Please fill out the required fields.");
    }
  };
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={updateAuth}>
        <img src={IGLogo} alt="Instagram logo" />
        <input
          type="text"
          placeholder="Username"
          value={userText}
          onChange={e => updateUserText(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={passwordText}
          onChange={e => updatePasswordText(e.target.value)}
        />
        <button>Log In</button>
      </form>
    </div>
  );
};

export default LogInPage;
