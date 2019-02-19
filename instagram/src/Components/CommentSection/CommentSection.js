import React, { useState } from "react";
import PropTypes from "prop-types";
import "./CommentSection.css";

import Comment from "./Comment";
import Likes from "./Likes";
import AddComment from "./AddComment";

const CommentSection = props => {
  const [likes, updateLikes] = useState(props.likes);
  const toggleLike = e => {
    if (e.target.classList.contains("far")) {
      updateLikes(likes + 1);
      e.target.classList.remove("far");
      e.target.classList.add("fas");
    } else {
      updateLikes(likes - 1);
      e.target.classList.remove("fas");
      e.target.classList.add("far");
    }
  };

  const [comments, updateComments] = useState(props.comments);
  const addComment = (e, comment) => {
    e.preventDefault();
    updateComments([...comments, comment]);
    console.log(comments);
  };

  const { timestamp } = props;
  return (
    <div className="comment-section">
      <div className="social-icons">
        <a className="reaction-btn" onClick={e => toggleLike(e)}>
          <i className="far fa-heart" />
        </a>
        <a className="reaction-btn">
          <i className="far fa-comment" />
        </a>
        <Likes likes={likes} />
      </div>

      <div className="comments">
        {comments.map((comment, index) => {
          return <Comment comment={comment} key={index} />;
        })}
      </div>

      <AddComment addComment={addComment} />
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
  timestamp: PropTypes.string.isRequired,
  likes: PropTypes.number
};

export default CommentSection;
