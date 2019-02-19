import React from "react";
import PropTypes from "prop-types";

const Likes = props => {
  return <div className="likes">{props.likes > 0 ? props.likes : 0} likes</div>;
};

Likes.propTypes = {
  likes: PropTypes.number
};

export default Likes;
