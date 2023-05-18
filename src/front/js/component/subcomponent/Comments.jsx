import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import "../../../styles/CommentStyles.css";
import { useParams } from "react-router-dom";
import { todayDate } from "../../utils/todaydate";

// const dummyComments = [];

const Comments = () => {
  const [commentBody, setCommentBody] = useState("");
  const { store, actions } = useContext(Context);
  const [error, setError] = useState("");

  const params = useParams();
  console.log(params);

  const handleCommentChange = (event) => {
    setCommentBody(event.target.value);
  };

  const onComment = (event) => {
    if (commentBody !== "") {
      actions.addComments(
        {
          content: commentBody,
          start_date: todayDate(),
        },
        params.songid
      );
      setCommentBody(""); // Este dejarlo
      setError("");
    } else {
      setError("No puedes comentar vacio");
    }
  };

  console.log(store.username);

  const deleteComment = (comment_id) => {
    actions.deleteComment(comment_id, params.songid);

  };

  useEffect(() => {
    actions.getComments(params.songid);
  }, []);

  return (
    <div className="container">
      <div className="p-3">
        {" "}
        <i>add your comment</i>
      </div>
      <div>{error !== "" && <span>Llene el comentario</span>}</div>
      <div className="comment-form-row p-3">
        <input
          value={commentBody}
          onChange={(event) => handleCommentChange(event)}
          className="message-input p-3"
          placeholder="what do you think of this song?"
        ></input>
        <button onClick={(event) => onComment(event)} className="btn">
          Comment
        </button>
      </div>
      <div>
        {store.comments.length > 0 ? (
          store.comments.map((comment) => (
            <div
              key={comment.id}
              className="comment container bg-white text-start my-1"
            >
              <div className="header ms-2  d-flex">
                <div>
                <span>{comment.name}</span>
                </div>
                <div>
                <span className="date">{comment.start_date}</span>
                </div>
              </div>
              <div className="message mt-2 ">{comment.content}</div>
              <div className=" text-end">
              <button onClick={() => deleteComment(comment.id)} className="basura mt-2">

                <i className="fas fa-trash"></i>

              </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>

      <p className="mt-1 bg-white"></p>

      <div className="header bg-white">
        <span className="date bg-white"></span>
      </div>
      <div className="message"></div>
      <div className="footer">
        <i className="far fa-trash"></i>
        footer
      </div>
    </div>
  );
};

export default Comments;
