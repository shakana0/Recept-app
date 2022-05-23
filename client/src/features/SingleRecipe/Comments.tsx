import styled from "styled-components";
import { useState } from "react";
import * as api from "../../api/index";
import { useParams } from "react-router";
import {} from "../../interface/recipes";

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
  ul {
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
`;

export const Comments = ({ commentsProp }: any) => {
  const [newComment, setComment] = useState({
    comment: "",
    name: "",
    createdAt: new Date(),
  });
  const [showComment, setShowComment] = useState(true);

  const { id }: any = useParams();
  const handleSubmit = () => {
    api.postComment(id, newComment);
  };

  const render = () => {
    if (showComment) {
      <h1>Hej</h1>;
    } else {
      <h1>Då</h1>;
    }
  };

  return (
    <>
      <CommentsStyle>
        <h2>Kommentarer</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="comment..."
            onChange={(event) =>
              setComment({ ...newComment, comment: event.target.value })
            }
          />
          <div>
            <input
              type="text"
              placeholder="name..."
              onChange={(event) =>
                setComment({ ...newComment, name: event.target.value })
              }
            />
            <button onClick={handleSubmit} type="button">
              Skicka
            </button>
          </div>
        </form>
        {/* <render/> */}
        {/* {render} */}
        <ul>
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
