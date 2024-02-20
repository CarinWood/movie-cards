import { useState } from "react";
import "./addMovie.css";

const AddMovie = () => {
  const [inputVal, setInputVal] = useState("");
  const [stars, setStars] = useState(1);

  const addRating = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(inputVal);
    console.log(stars);
  };

  const clear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInputVal("");
    setStars(1)
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault;
    setStars(parseInt(e.target.value));
  };

  return (
    <form>
      <div>
        <label className="title-label">Title:</label>
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
        <label className="range-label">Rating: </label>
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
      <select>
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
      </div>
      <textarea />
      <div>
        <button onClick={(e) => clear(e)}>Clear</button>
        <button onClick={(e) => addRating(e)}>Add</button>
      </div>
    </form>
  );
};

export default AddMovie;
