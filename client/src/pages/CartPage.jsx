// ShoppingCartPage.jsx
import CartItemCard from "../components/CartPage/CartItemCard";
import CartSummary from "../components/CartPage/CartSummary";
import Empty from "../components/CartPage/Empty";
// Import Header, Footer, and other layout components as needed

const cartItems = [
  {
    id: 1,
    title: "Music Production in Logic Pro - The Complete Course!",
    instructor: "Tomas George",
    rating: 4.6,
    reviewCount: 14291,
    hours: 52,
    lectures: 489,
    levels: "All Levels",
    isBestSeller: true,
    price: 3199,
    imageUrl:
      "https://alpha.uscreencdn.com/images/programs/1607672/horizontal/1480x840-logic-pro-beginner-complete.1670263296.jpg", // Placeholder image URL
  },
];

const ShoppingCartPage = () => {
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);
  // Mock handlers
  const handleRemove = (id) => console.log(`Remove course ${id}`);
  const handleSaveForLater = (id) => console.log(`Save for Later course ${id}`);
  const handleCheckout = () => console.log("Proceeding to Checkout");
  console.log(cartItems);

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="container mx-auto p-6 max-w-7xl">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Cart Items */}
          <div className="lg:w-2/3">
            <h2 className="text-xl font-semibold mb-4">
              {cartItems.length} Course in Cart
            </h2>
            {cartItems.length > 0 ? (
              cartItems.map((course) => (
                <CartItemCard
                  key={course.id}
                  course={course}
                  onRemove={handleRemove}
                  onSaveForLater={handleSaveForLater}
                />
              ))
            ) : (
              <Empty />
            )}
          </div>

          {/* Right Column: Cart Summary */}
          {totalAmount > 0 && (
            <div className="lg:w-1/3">
              <CartSummary
                totalAmount={totalAmount}
                onProceedToCheckout={handleCheckout}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
