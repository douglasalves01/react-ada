import PropTypes from "prop-types";

const Comment = ({ author, content }) => {
  return (
    <div className="comment">
      <strong>{author}:</strong> {content}
    </div>
  );
};

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Comment;
