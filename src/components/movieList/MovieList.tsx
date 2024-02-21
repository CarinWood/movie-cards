import { useMovieContext } from "../../contexts/MovieContexts";
import MovieCard from "../movieCard/MovieCard";

const MovieList = () => {
  const { movies, setMovies } = useMovieContext();

  const deleteCard = (desc: string) => {
    console.log(desc);
    const updatedArray = movies.filter((movie) => movie.description !== desc)
    setMovies(updatedArray)
  };
  return (
    <>
      {movies.map((movie, i) => {
        return (
          <div key={i}>
            {" "}
            <MovieCard
              title={movie.title}
              rating={movie.rating}
              description={movie.description}
              genre={movie.genre}
              deleteCard={deleteCard}
            />
          </div>
        );
      })}
    </>
  );
};

export default MovieList;
