import React from "react";
import "./App.css";
import loginConditional from "./Components/HigherOrderComponents/loginConditional";
import InstaFeed from "./Components/InstaFeed/InstaFeed";
import LogInPage from "./Components/LogIn/LogInPage";

const App = () => {
  return (
    <div className="App">
      <Result />
    </div>
  );
};

const Result = loginConditional(LogInPage)(InstaFeed);

export default App;
