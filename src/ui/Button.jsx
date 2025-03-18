function Button({ type, shape, textColor, onClick, children }) {
  const color =
    type === "primary" || type === undefined
      ? "bg-indigo-200 text-indigo-950 shadow-indigo-900/65 hover:bg-indigo-300 "
      : "bg-gray-200/75 text-gray-950 hover:bg-gray-300 shadow-gray-900/65 ";

  const round =
    shape !== "circle" || shape === undefined
      ? "rounded-2xl px-6 py-3 "
      : "rounded-full px-3 py-3 ";

  
  return (
    <button
      className={`transition text-2xl duration-300 shadow-md text-stone-700 ${round} ${color}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
