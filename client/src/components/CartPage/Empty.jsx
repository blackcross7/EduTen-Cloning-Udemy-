import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Empty = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col justify-center items-center gap-6 py-20">
      <img src="/empty-shopping-cart-v2.webp" />
      <p className="text-gray-800 ">
        Your cart is empty. Keep shopping to find a course!
      </p>
      <Button variant="primary" onClick={() => navigate("/")}>
        Keep Shopping
      </Button>
    </div>
  );
};

export default Empty;
