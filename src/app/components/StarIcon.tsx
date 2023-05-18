import { FaStar } from 'react-icons/fa';

const StarIcon = ({ filled }: {filled: boolean}) => {
    return filled ? <FaStar fill="gold" size={24} /> : <FaStar fill="gray" size={24} />;
  }

  export default StarIcon