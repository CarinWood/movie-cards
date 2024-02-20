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
      <div>
        {movies.map((movie, i) => {
           return <div key={i}> <MovieCard title={movie.title}/></div>
        })}
      
      </div>
    </>
  );
};

export default Home;
