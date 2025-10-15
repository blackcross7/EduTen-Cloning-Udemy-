// Button.jsx

const Button = ({
  children,
  onClick,
  variant = "primary",
  fullWidth = false,
}) => {
  const baseClasses =
    "py-3 px-6 rounded-md font-bold transition-colors duration-200";

  // Choose styles based on the 'variant' prop
  const variantClasses = {
    primary: "bg-purple-700 text-white hover:bg-purple-800",
    secondary:
      "bg-white text-purple-700 border border-purple-700 hover:bg-gray-50",
    text: "text-purple-700 hover:underline",
  }[variant];

  const widthClass = fullWidth ? "w-full" : "w-auto";

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${widthClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
