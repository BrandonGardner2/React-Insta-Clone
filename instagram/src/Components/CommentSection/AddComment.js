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
    let user = localStorage.getItem("user");
    try {
      user = JSON.parse(user);
    } catch (e) {}
    return user;
  };
  const formPayload = () => {
    return {
      text: input,
      username: curUser()
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
        ref={inputRef}
      />
    </form>
  );
};

export default forwardRef(AddComment);
