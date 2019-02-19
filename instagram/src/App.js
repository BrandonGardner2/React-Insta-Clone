import React, { useState, useEffect } from "react";
import dummyData from "./dummy-data";
import "./App.css";

import SearchBar from "./Components/SearchBar/SearchBar";
import PostContainer from "./Components/PostContainer/PostContainer";

const App = () => {
  const [posts, updatePosts] = useState([]);
  const [initialized, updateInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      updateInitialized(true);
      updatePosts(dummyData);
    }
  }, []);

  return (
    <div className="App">
      <SearchBar />
      {posts.map((post, index) => {
        return <PostContainer key={index} post={post} />;
      })}
    </div>
  );
};

export default App;
