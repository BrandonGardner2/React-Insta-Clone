import React from "react";
import "./App.css";
import loginConditional from "./Components/HigherOrderComponents/loginConditional";
import InstaFeed from "./Components/InstaFeed/InstaFeed";
import LogInPage from "./Components/LogIn/LogInPage";

const App = () => {
  return <Result />;
};

const Result = loginConditional(LogInPage)(InstaFeed);

export default App;
