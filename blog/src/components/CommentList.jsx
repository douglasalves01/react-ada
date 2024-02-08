import PropTypes from "prop-types"; // Importe PropTypes
import Comment from "./Comment";
const CommentList = ({ comments }) => {
  return (
    <div className="comment-list">
      {comments.map((comment, index) => (
        <Comment
          key={index}
          author={comment.author}
          content={comment.content}
        />
      ))}
    </div>
  );
};

// Adicione a validação de PropTypes
CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CommentList;
