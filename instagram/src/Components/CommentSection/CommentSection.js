import React from "react";
import PropTypes from "prop-types";

import Comment from "./Comment";

const CommentSection = props => {
  let { comments, timestamp, likes } = props;
  return (
    <div className="comment-section">
      <div className="social-icons">
        <button>Heart</button>
        <button>Chat</button>
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
