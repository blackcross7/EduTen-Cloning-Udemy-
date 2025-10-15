// CartItemCard.jsx
import Button from "./Button";
import Badge from "./Badge";
import CourseRating from "./CourseRating";
import PriceDisplay from "./PriceDisplay";

const CartItemCard = ({ course, onRemove, onSaveForLater }) => {
  const {
    title,
    instructor,
    rating,
    reviewCount,
    hours,
    lectures,
    levels,
    isBestSeller,
    price,
    imageUrl,
  } = course;

  return (
    <div className="flex border-b pb-4 mb-4">
      {/* Course Thumbnail */}
      <img
        src={imageUrl}
        alt={title}
        className="w-24 h-24 object-cover mr-4 flex-shrink-0"
      />

      {/* Course Details (Left) */}
      <div className="flex-grow">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">By {instructor}</p>

        <div className="mt-1 space-y-1">
          {isBestSeller && <Badge text="Bestseller" type="bestseller" />}
          <CourseRating rating={rating} reviewCount={reviewCount} />
          <p className="text-xs text-gray-500">
            {hours} total hours • {lectures} lectures • {levels}
          </p>
        </div>

        {/* Action Links */}
        <div className="flex space-x-4 mt-2">
          <Button variant="text" onClick={() => onRemove(course.id)}>
            Remove
          </Button>
          <Button variant="text" onClick={() => onSaveForLater(course.id)}>
            Save for Later
          </Button>
        </div>
      </div>

      {/* Price (Right) */}
      <div className="ml-8">
        <PriceDisplay price={price} currency="₹" size="small" />
      </div>
    </div>
  );
};

export default CartItemCard;
