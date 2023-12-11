import { Link } from "react-router-dom";
import { showFormattedDate } from "../../utils";
import PropTypes from "prop-types";
export default function Notes({ id, title, body, createdAt }) {
  return (
    <article className="note-item" key={id}>
      <h3>
        <Link to={`/notes/${id}`}>{title}</Link>
      </h3>
      <p className="note-item__createdAt">{showFormattedDate(createdAt)}</p>
      <p className="note-item__body"> {body}</p>
    </article>
  );
}

Notes.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
