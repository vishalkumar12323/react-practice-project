import { useEffect, useState } from "react";
import { comments } from "../lib/data";
import "../styles/comments.css";

export const Comment = ({ data, handleAddReply }) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [replyText, setReplyText] = useState("");

  function onReply(e, commentId) {
    e.preventDefault();
    handleAddReply(replyText, commentId);
    setShowReplyInput(false);
  }
  return (
    <div
      style={{
        marginLeft: data.parentId ? "20px" : "0",
        borderLeft: "2px solid #ddd",
        paddingLeft: "10px",
        marginBottom: "10px",
      }}>
      <p style={{ marginTop: "10px", marginRight: "5px" }}>
        {data.text}{" "}
        <button
          className="reply-button"
          onClick={() => setShowReplyInput(!showReplyInput)}>
          reply
        </button>
      </p>

      {showReplyInput && (
        <form onSubmit={(e) => onReply(e, data.id)}>
          <input
            type="text"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <button className="reply-button" type="submit">
            reply
          </button>
        </form>
      )}

      {data.replies.length > 0 &&
        data.replies.map((reply) => {
          return (
            <Comment
              data={reply}
              handleAddReply={handleAddReply}
              key={reply.id}
            />
          );
        })}
    </div>
  );
};

export const CommentLayout = () => {
  const [commentData, setCommentData] = useState(comments);
  const [newComment, setNewComment] = useState("");

  function handleAddNewComment(event) {
    event.preventDefault();

    if (!newComment.trim()) return;
    setCommentData((comments) => {
      return [
        ...comments,
        {
          id: Date.now().toString(),
          text: newComment.trim(),
          replies: [],
          parentId: null,
        },
      ];
    });
    setNewComment("");
  }

  function handleAddReply(replyText, commentId) {
    const newComment = {
      id: Date.now().toString(),
      parentId: commentId,
      text: replyText,
      replies: [],
    };
    const addReplyToTree = (commentsList) =>
      commentsList.map((comment) =>
        comment.id === commentId
          ? { ...comment, replies: [...comment.replies, newComment] }
          : { ...comment, replies: addReplyToTree(comment.replies) }
      );

    setCommentData(addReplyToTree(commentData));
  }

  useEffect(() => {
    console.log(commentData);
  }, [commentData]);
  return (
    <div style={{ padding: "1.5rem" }}>
      <div className="add-comment-form">
        <form onSubmit={handleAddNewComment}>
          <input
            type="text"
            className="add-comment-input"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button type="submit" className="add-comment-button">
            Add Comment
          </button>
        </form>
      </div>

      <div>
        {commentData.map((comment) => {
          return (
            <Comment
              data={comment}
              handleAddReply={handleAddReply}
              key={comment.id}
            />
          );
        })}
      </div>
    </div>
  );
};
