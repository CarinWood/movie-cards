import AddMovie from "../components/addMovie/AddMovie";
import MovieCard from "../components/movieCard/MovieCard";
import { useMovieContext } from "../contexts/MovieContexts";

import "../styles/home.css";

const Home = () => {
const {movies} = useMovieContext()
  return (
    <>
      <div className="top-page">
        <p className="headline">Movie Rating</p>
        <AddMovie />
      </div>
      <div className="bottom-page">
        {movies.map((movie, i) => {
           return <div key={i}> <MovieCard title={movie.title} rating={movie.rating} description={movie.description} genre={movie.genre}/></div>
        })}
      
      </div>
    </>
  );
};

export default Home;
