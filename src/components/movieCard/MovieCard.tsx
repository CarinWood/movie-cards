import { FC } from "react";
import "./movieCard.css";
import { IoStarOutline } from "react-icons/io5";

type movieProps = {
  title: string;
  rating: number;
  description: string;
  genre: string;
  deleteCard: (description: string) => void
 };

const MovieCard: FC<movieProps> = ({ title, rating, description, genre, deleteCard }) => {
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
    <>
      <div className="movie-card" onClick={() => deleteCard(description)}>
        <p className="card-title">{title}</p>
        <div className="rate-gen">
          <div className="card-rating">{getRating()}</div>
          <p className="card-genre"><i>{genre}</i></p>
        </div>

        <p className="card-desc">{description}</p>
      </div>
    </>
  );
};

export default MovieCard;
