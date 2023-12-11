import PropTypes from "prop-types";

export default function Button({ kelas, title, icon, action }) {
  return (
    <button className={kelas} title={title} onClick={action}>
      {icon}
    </button>
  );
}

Button.propTypes = {
  kelas: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  action: PropTypes.func.isRequired,
};
