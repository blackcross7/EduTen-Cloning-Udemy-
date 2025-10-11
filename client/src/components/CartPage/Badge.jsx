// Badge.jsx

const Badge = ({ text, type = "default" }) => {
  const classes = {
    bestseller: "bg-yellow-200 text-gray-800 font-semibold text-xs py-1 px-2",
    default: "bg-gray-200 text-gray-600 text-xs py-1 px-2",
  }[type];

  return <span className={`inline-block rounded ${classes}`}>{text}</span>;
};

export default Badge;
