import { useState } from "react";
import "./addMovie.css";
import { useMovieContext } from "../../contexts/MovieContexts";

const AddMovie = () => {
  const { setMovies } = useMovieContext();
  const [inputVal, setInputVal] = useState("");
  const [stars, setStars] = useState(1);
  const [genre, setGenre] = useState("");
  const [text, setText] = useState("");

  const addRating = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const movie = {
      title: inputVal,
      rating: stars,
      genre: genre,
      description: text,
    };

    setMovies((prevMovies) => {
      return [...prevMovies, movie];
    });
  };

  const clear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInputVal("");
    setStars(1);
    setGenre("");
    setText("");
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault;
    setStars(parseInt(e.target.value));
  };

  const handleSelectGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGenre(e.target.value);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };



  return (
    <form>
      <div>
        <label className="input-label">Title:</label>
        <article>
          <input
            type="text"
            className="title-input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
        </article>
      </div>
      <div className="rating-div">
        <label className="input-label">Rating: </label>
        <article>
          <span>1</span>
          <input
            type="range"
            min={1}
            max={5}
            step={1}
            value={stars}
            onChange={handleRangeChange}
          />
          <span>5</span>
        </article>
      </div>
      <div>
        <label className="input-label">Genre: </label>
        <article>
          <select onChange={handleSelectGenre}>
            <option value="">Select</option>
            <option value="Drama">Drama</option>
            <option value="Arama">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
            <option value="Thriller">Thriller</option>
            <option value="Western">Western</option>
            <option value="Sci-fi">Sci-fi</option>
          </select>
        </article>
      </div>
      <div className="description-div">
        <label htmlFor="" className="input-label">
          Description:
        </label>
        <article>
          <textarea value={text} onChange={handleTextChange} />
        </article>
      </div>
      <div className="button-div">
        <button onClick={(e) => clear(e)}>Clear</button>
        <button onClick={(e) => addRating(e)}>Add</button>
      </div>
    </form>
  );
};

export default AddMovie;
