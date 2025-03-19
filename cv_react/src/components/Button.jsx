export default function Button({ buttonText, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`${className} mb-1 flex items-center justify-center rounded-full border border-slate-300 px-5 py-2 text-center text-sm text-slate-600 opacity-90 shadow-sm transition-all hover:opacity-100 hover:shadow-lg`}
    >
      {buttonText}
    </button>
  );
}
