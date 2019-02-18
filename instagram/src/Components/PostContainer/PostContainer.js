import React from "react";
import PropTypes from "prop-types";
import "./PostContainer.css";

import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  const {
    username,
    thumbnailUrl,
    imageUrl,
    likes,
    timestamp,
    comments
  } = props.post;
  return (
    <div className="post-container">
      <div className="post-header">
        <img className="post-thumb" src={thumbnailUrl} alt="Thumbnail" />
        <p>
          <strong>{username}</strong>
        </p>
      </div>
      <div className="post-media">
        <img className="post-image" src={imageUrl} alt="Post content" />
      </div>
      <CommentSection comments={comments} timestamp={timestamp} likes={likes} />
    </div>
  );
};

PostContainer.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    )
  })
};

export default PostContainer;
