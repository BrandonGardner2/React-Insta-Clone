import React, { useState } from "react";

const LogInPage = props => {
  const [userText, updateUserText] = useState("");
  const [passwordText, updatePasswordText] = useState("");

  const updateAuth = e => {
    e.preventDefault();
    localStorage.setItem("user", userText);
    localStorage.setItem("password", passwordText);
    props.updateAuthenticated(props.getAuth());
  };
  return (
    <form onSubmit={updateAuth}>
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
  );
};

export default LogInPage;
