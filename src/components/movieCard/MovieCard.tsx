import { FC } from "react";
import "./movieCard.css";
import { IoStarOutline } from "react-icons/io5";

type movieProps = {
  title: string;
  img: string;
  rating: number;
};

const MovieCard: FC<movieProps> = ({ title, img, rating }) => {
  const getRating = () => {
    switch (rating) {
      case 1:
        return (
          <p>
            <IoStarOutline />
          </p>
        );
        break;
      case 2:
        return (
          <p>
            <IoStarOutline />
            <IoStarOutline />
          </p>
        );
        break;
      case 3:
        return (
          <p>
            <IoStarOutline />
            <IoStarOutline />
            <IoStarOutline />
          </p>
        );
        break;
      case 4:
        return (
          <p>
            <IoStarOutline />
            <IoStarOutline />
            <IoStarOutline />
            <IoStarOutline />
          </p>
        );
        break;
      case 5:
        return (
          <p>
            <IoStarOutline />
            <IoStarOutline />
            <IoStarOutline />
            <IoStarOutline />
            <IoStarOutline />
          </p>
        );
        break;
      default:
        return (
          <p>
            <IoStarOutline />
          </p>
        );
    }
  };

  return (
    <div className="movie-card">
      <img className="card-img" src={img} alt={title} />
      <p className="card-title">{title}</p>
      <div className="card-rating">{getRating()}</div>
    </div>
  );
};

export default MovieCard;
