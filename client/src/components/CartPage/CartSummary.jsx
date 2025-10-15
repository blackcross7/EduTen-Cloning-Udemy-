// CartSummary.jsx
import Button from "./Button";
import PriceDisplay from "./PriceDisplay";

const CartSummary = ({ totalAmount, onProceedToCheckout, onApplyCoupon }) => {
  return (
    <div className="border border-gray-200 p-6 shadow-md sticky top-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-700">Total:</h2>

      <PriceDisplay price={totalAmount} currency="₹" size="large" />

      <p className="text-sm text-gray-500 mt-2 mb-4">
        You won't be charged yet
      </p>

      <Button fullWidth onClick={onProceedToCheckout}>
        Proceed to Checkout
      </Button>

      {/* Apply Coupon Section */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-md font-semibold mb-3">Apply Coupon</h3>
        <div className="flex">
          <input
            type="text"
            placeholder="Enter coupon"
            className="flex-grow border border-gray-300 p-2 rounded-l-md focus:ring-purple-500 focus:border-purple-500"
          />
          {/* Note: In a real app, this would use the 'onApplyCoupon' prop */}
          <Button
            variant="secondary"
            onClick={() => console.log("Applying coupon")}
            className="rounded-l-none"
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
