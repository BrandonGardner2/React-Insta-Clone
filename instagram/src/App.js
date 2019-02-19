import React, { useState, useEffect } from "react";
import dummyData from "./dummy-data";
import Fuse from "fuse.js";
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
    const options = {
      keys: ["username"]
    };
    const fuse = new Fuse(dummyData, options);
    if (text !== "") {
      // const filtered = posts.filter(post => post.username.includes(text));
      const filtered = fuse.search(text);
      updatePosts(filtered);
    } else {
      updatePosts(dummyData);
    }
  };

  const resetPosts = () => {
    updatePosts(dummyData);
  };

  return (
    <div className="App">
      <SearchBar filterPosts={filterPosts} resetPosts={resetPosts} />
      {posts.map((post, index) => {
        return <PostContainer key={index} post={post} />;
      })}
    </div>
  );
};

export default App;
