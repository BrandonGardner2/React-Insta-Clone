import React from "react";
import PropTypes from "prop-types";

const Likes = props => {
  return (
    <div className="likes">
      <strong>{props.likes > 0 ? props.likes : 0} likes</strong>
    </div>
  );
};

Likes.propTypes = {
  likes: PropTypes.number
};

export default Likes;
