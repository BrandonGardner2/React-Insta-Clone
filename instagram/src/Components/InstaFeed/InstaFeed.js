import React, { useState, useEffect } from "react";
import dummyData from "../../dummy-data";
import Fuse from "fuse.js";

import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "../PostContainer/PostContainer";

const InstaFeed = () => {
  const [posts, updatePosts] = useState([]);

  useEffect(() => {
    updatePosts(dummyData);
  }, []);

  const filterPosts = (e, text) => {
    e.preventDefault();
    const options = {
      keys: ["username"]
    };
    const fuse = new Fuse(dummyData, options);
    if (text !== "") {
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

export default InstaFeed;
