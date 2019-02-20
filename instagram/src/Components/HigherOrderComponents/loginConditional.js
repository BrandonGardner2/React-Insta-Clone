import React, { useState } from "react";

const loginConditional = LogInPage => InstaFeed => props => {
  const getAuth = () => {
    const user = localStorage.getItem("user") || false;
    const password = localStorage.getItem("password") || false;
    return user && password;
  };

  const [authenticated, updateAuthenticated] = useState(getAuth);

  if (authenticated) {
    return (
      <InstaFeed updateAuthenticated={updateAuthenticated} getAuth={getAuth} />
    );
  } else {
    return (
      <LogInPage updateAuthenticated={updateAuthenticated} getAuth={getAuth} />
    );
  }
};

export default loginConditional;
