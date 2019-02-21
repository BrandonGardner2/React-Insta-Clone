import React from "react";
import styled from "styled-components";

import loginConditional from "./Components/HigherOrderComponents/loginConditional";
import InstaFeed from "./Components/InstaFeed/InstaFeed";
import LogInPage from "./Components/LogIn/LogInPage";

const AppComponent = styled.div``;

const App = () => {
  return (
    <AppComponent>
      <Result />
    </AppComponent>
  );
};

const Result = loginConditional(LogInPage)(InstaFeed);

export default App;
