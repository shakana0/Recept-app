import styled from "styled-components";
import { useState } from "react";
import * as api from "../../api/index";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useParams } from "react-router";

const CommentsStyle = styled.article`
  margin: 2rem 0;
  background-color: #000000e2;
  width: 650px;
  color: white;
  padding: 0 2rem;
  box-sizing: border-box;
  h2 {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    box-sizing: border-box;

    input {
      padding: 1rem 0;
      margin-bottom: 1rem;
      border-radius: 10px;
      border: none;

      ::placeholder {
        padding-left: 1rem;
      }
    }

    div {
      display: flex;
      align-items: center;

      input {
        width: 70%;
        margin: 0;
      }
    }
    button {
      margin-left: 1rem;
      padding: 1rem 1.2rem;
      border-radius: 10px;
      width: 30%;
      transition: 0.25s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
  .comments-style {
    box-sizing: border-box;
    padding: 0 2rem;
    height: 200px;
    overflow: scroll;

    ::-webkit-scrollbar {
      background-color: black;
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: black;
      border-radius: 10px;
      width: 10px;
    }
    li {
      padding: 0.5rem;
      background-color: #ffffffd7;
      color: black;
      margin-bottom: 0.5rem;
      border-radius: 10px;
    }
  }
  .comment-msg {
    display: flex;
    align-items: center;
    justify-content: center;

    .emoji-icon {
      font-size: 3rem;
    }
  }
  .error-style {
    div {
      display: flex;
      align-items: center;
      li {
        color: red;
        list-style: none;
        margin-left: .3rem;
      }
      .error-icon {
        color: red;
        font-size: 1.5rem;
      }
    }
  }
`;

export const Comments = ({ commentsProp }: any) => {
  const [newComment, setComment] = useState({
    comment: "",
    name: "",
    createdAt: new Date(),
  });
  const [showComment, setShowComment] = useState(true);
  const [formError, setFormError] = useState<string[]>([]);
  const { id }: any = useParams();

  let error: any = [];

  const handleSubmit = () => {
    error = [];
    if (newComment.comment === "") {
      error.push("skriv en kommentar tack");
    }
    if (newComment.name === "") {
      error.push("skriv ditt namn tack");
    }
    if(!error.length){
      api.postComment(id, newComment)
      handleComment();
    }
    setFormError(error);
    console.log(formError);
  };

  const handleComment = () => {
    setShowComment(!showComment);
  };

  const renderCommentForm = () => {
    if (showComment) {
      return (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="comment..."
            required
            onChange={(event) =>
              setComment({ ...newComment, comment: event.target.value })
            }
          />
          <div>
            <input
              type="text"
              placeholder="name..."
              required
              onChange={(event) =>
                setComment({ ...newComment, name: event.target.value })
              }
            />
            <button onClick={handleSubmit} type="button">
              Skicka
            </button>
          </div>
        </form>
      );
    } else {
      return (
        <div className="comment-msg">
          <h2>Tack för din kommentar</h2>
          <EmojiEmotionsIcon className="emoji-icon" />
        </div>
      );
    }
  };

  return (
    <>
      <CommentsStyle>
        <h2>Kommentarer</h2>
        {renderCommentForm()}
        <ul className="error-style">
          {formError &&
            formError.map((error: string, index: number) => (
              <div key={index}>
                <ErrorOutlineIcon className="error-icon" />
                <li>{error}</li>
              </div>
            ))}
        </ul>

        <ul className="comments-style">
          {commentsProp &&
            commentsProp.map((comment: any, index: number) => (
              <li key={index}>
                {comment.comment}, {comment.name}, {comment.createdAt}{" "}
              </li>
            ))}
        </ul>
      </CommentsStyle>
    </>
  );
};
