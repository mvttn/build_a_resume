export default function Button({ buttonText, onClick }) {
  return (
    <button
      onClick={onClick}
      className="mb-1 rounded-full border border-slate-300 px-5 py-2 text-center text-sm text-slate-600 shadow-sm transition-all hover:border-slate-800 hover:bg-slate-800 hover:text-white hover:shadow-lg focus:border-slate-800 focus:bg-slate-800 focus:text-white active:border-slate-800 active:bg-slate-800 active:text-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    >
      {buttonText}
    </button>
  );
}
