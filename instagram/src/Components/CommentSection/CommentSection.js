import React, { useState } from "react";
import PropTypes from "prop-types";

import Comment from "./Comment";

const CommentSection = props => {
  const [likes, updateLikes] = useState(props.likes);
  const [comments, updateComments] = useState(props.comments);

  const { timestamp } = props;
  return (
    <div className="comment-section">
      <div className="social-icons">
        <button>Heart</button>
        <button>Chat</button>
        <p>{likes} likes</p>
      </div>
      <div className="comments">
        {comments.map((comment, index) => {
          return <Comment comment={comment} key={index} />;
        })}
      </div>
    </div>
  );
};

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
  timestamp: PropTypes.string.isRequired,
  likes: PropTypes.number
};

export default CommentSection;
