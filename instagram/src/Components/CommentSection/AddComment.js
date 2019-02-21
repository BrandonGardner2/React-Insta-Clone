import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useRef
} from "react";
import styled from "styled-components";

const AddCommentComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AddCommentForm = styled.form`
  margin: 15px 0;
  display: flex;
  align-items: center;
  width: 90%;
`;

const AddCommentInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  &:focus {
    border: none;
    outline: none;
    width: 100%;
  }
`;

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
    <AddCommentComponent>
      <AddCommentForm
        onSubmit={e => {
          props.addComment(e, formPayload());
          updateInput("");
        }}
      >
        <AddCommentInput
          type="text"
          placeholder="Add a comment.."
          value={input}
          onChange={e => updateInput(e.target.value)}
          ref={inputRef}
        />
      </AddCommentForm>
      <i className="fas fa-ellipsis-h" />
    </AddCommentComponent>
  );
};

export default forwardRef(AddComment);
