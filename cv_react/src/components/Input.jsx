export default function Input({
  type = "text",
  id,
  placeholder = "",
  labelText,
}) {
  return (
    <>
      <label htmlFor={id} className="text-sm font-semibold">
        {labelText}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="ease w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-slate-300 focus:border-slate-400 focus:shadow focus:outline-none"
      />
    </>
  );
}
