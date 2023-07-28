import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface RatingProps {
  initialRating: number;
  changeRating: boolean;
}

const Rating = ({ initialRating, changeRating }: RatingProps) => {
  const [rating, setRating] = useState<number>(initialRating);

  const handleRating = (selectedRating: number) => {
    setRating(selectedRating);
  };

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={`cursor-pointer ${index < rating ? 'text-yellow-500' : 'text-gray-400'}`}
          onClick={() => (changeRating ? handleRating(index + 1) : null)}
        />
      ))}
      <span className='text-gray-400 text-xs ml-2'>(rating: {rating})</span>
    </div>
  );
};

export default Rating;
