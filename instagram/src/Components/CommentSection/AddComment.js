import React, { useState } from "react";
import PropTypes from "prop-types";

const AddComment = props => {
  const [input, updateInput] = useState("");

  const formPayload = () => {
    return {
      text: input,
      username: "billy-ray"
    };
  };

  return (
    <form
      className="add-comment"
      onSubmit={e => {
        props.addComment(e, formPayload());
        updateInput("");
      }}
    >
      <input
        type="text"
        placeholder="Add a comment.."
        value={input}
        onChange={e => updateInput(e.target.value)}
      />
    </form>
  );
};

AddComment.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default AddComment;
