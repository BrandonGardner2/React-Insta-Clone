import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useRef
} from "react";

const AddComment = (props, ref) => {
  const [input, updateInput] = useState("");

  const inputRef = useRef(null);
  useImperativeHandle(ref, () => inputRef.current);

  const curUser = () => {
    let token = localStorage.getItem("token");
    token = JSON.parse(token);
    const user = token.user;
    return user;
  };
  const formPayload = () => {
    return {
      text: input,
      username: curUser()
    };
  };

  return (
    <div className="add-comment-form">
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
          ref={inputRef}
        />
      </form>
      <i className="fas fa-ellipsis-h" />
    </div>
  );
};

export default forwardRef(AddComment);
