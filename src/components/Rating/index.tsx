import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

// Define props for the component if needed
interface RatingComponentProps {
  initialRating?: number;
  onRatingChange?: (newRating: number) => void;
  isEditable?: boolean;
}

const RatingComponent: React.FC<RatingComponentProps> = ({
  initialRating = 1,
  onRatingChange,
  isEditable = false,
}) => {
  const [rating, setRating] = useState(initialRating);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <div>
      <ReactStars
        count={5}
        value={rating}
        onChange={handleRatingChange}
        edit={isEditable}
        size={24}
        activeColor="#ffd700"
      />
    </div>
  );
};

export default RatingComponent;
