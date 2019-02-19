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

  const filterPosts = (e, text) => {
    e.preventDefault();
    if (text !== "") {
      const filtered = posts.filter(post => post.username.includes(text));
      updatePosts(filtered);
    } else {
      updatePosts(dummyData);
    }
  };

  return (
    <div className="App">
      <SearchBar filterPosts={filterPosts} />
      {posts.map((post, index) => {
        return <PostContainer key={index} post={post} />;
      })}
    </div>
  );
};

export default App;
