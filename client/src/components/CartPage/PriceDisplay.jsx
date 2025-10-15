// PriceDisplay.jsx

const PriceDisplay = ({ price, currency = "₹", size = "large" }) => {
  const formattedPrice = `${currency}${price?.toLocaleString("en-IN")}`; // Formats 3199 as 3,199

  const classes = {
    large: "text-4xl font-extrabold",
    medium: "text-2xl font-bold",
    small: "text-lg font-semibold",
  }[size];

  return <div className={`text-gray-800 ${classes}`}>{formattedPrice}</div>;
};

export default PriceDisplay;
