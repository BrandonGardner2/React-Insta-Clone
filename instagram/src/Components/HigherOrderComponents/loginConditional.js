import React, { useState } from "react";

const loginConditional = LogInPage => InstaFeed => props => {
  const getAuth = () => {
    let token = localStorage.getItem("token") || false;
    if (!token) {
      return false;
    } else {
      token = JSON.parse(token);
      if (token.ttl + token.now > Date.now()) {
        return true;
      } else {
        localStorage.removeItem("token");
        return false;
      }
    }
  };

  const [authenticated, updateAuthenticated] = useState(getAuth);

  if (authenticated) {
    return <InstaFeed />;
  } else {
    return (
      <LogInPage updateAuthenticated={updateAuthenticated} getAuth={getAuth} />
    );
  }
};

export default loginConditional;
