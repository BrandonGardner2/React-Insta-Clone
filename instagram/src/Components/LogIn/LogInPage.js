import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import IGLogo from "../../assets/iglogo.png";

const LoginContainer = styled.div`
  background-color: white;
  border: 1px solid lightgrey;
  max-width: 600px;
  margin: 50px auto;
  padding: 50px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginImage = styled.img`
  max-width: 50%;
  margin-bottom: 10px;
`;

const LoginInput = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  width: 50%;
  margin: 10px 0;
  &:focus {
    outline: none;
  }
`;

const LoginButton = styled.button`
  background-color: #5851db;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid lightgray;
  margin: 10px 0;
  height: 40px;
  width: 40%;
  transition: 0.2s;

  &:hover {
    background-color: #405de6;
    box-shadow: 0px 5px 5px 0px rgba(176, 170, 176, 1);
    transform: translateY(-2px);
    transition: 0.2s;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: none;
    transition: 0.2s;
  }
`;

const LogInPage = props => {
  const [userText, updateUserText] = useState("");
  const [passwordText, updatePasswordText] = useState("");

  const updateAuth = e => {
    e.preventDefault();
    if (userText !== "" && passwordText !== "") {
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
    <LoginContainer>
      <LoginForm onSubmit={updateAuth}>
        <LoginImage src={IGLogo} alt="Instagram logo" />
        <LoginInput
          type="text"
          placeholder="Username"
          value={userText}
          onChange={e => updateUserText(e.target.value)}
        />
        <LoginInput
          type="password"
          placeholder="Password"
          value={passwordText}
          onChange={e => updatePasswordText(e.target.value)}
        />
        <LoginButton>Log In</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

LogInPage.propTypes = {
  updateAuthenticated: PropTypes.func.isRequired,
  getAuth: PropTypes.func.isRequired
};

export default LogInPage;
