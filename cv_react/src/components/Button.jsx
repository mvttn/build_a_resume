import PropTypes from "prop-types";

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default function Button({ buttonText, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`${className} mb-1 flex items-center justify-center rounded-full border border-slate-300 px-5 py-2 text-center text-sm text-black opacity-90 shadow-sm transition-all hover:scale-103 hover:opacity-100 hover:shadow-lg`}
    >
      {buttonText}
    </button>
  );
}
