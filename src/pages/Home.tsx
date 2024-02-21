import AddMovie from "../components/addMovie/AddMovie";
import MovieList from "../components/movieList/MovieList";

import "../styles/home.css";

const Home = () => {
  return (
    <>
        <div className="top-page">
            <p className="headline">Movie Rating</p>
            <AddMovie />
        </div>

        <div className="bottom-page">
            <MovieList />
        </div>
    </>
  );
};

export default Home;
