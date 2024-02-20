import { useState } from "react";
import "./addMovie.css";

const AddMovie = () => {
  const [inputVal, setInputVal] = useState("");

  const addRating = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(inputVal);
  };

  const clear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("clear");
    setInputVal("");
  };

  return (
    <form>
      <div>
        <label className="title-label">Title:</label>
        <input
          type="text"
          className="title-input"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
      </div>
      <input type="range" />
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
      <textarea />
      <div>
        <button onClick={(e) => clear(e)}>Clear</button>
        <button onClick={(e) => addRating(e)}>Add</button>
      </div>
    </form>
  );
};

export default AddMovie;
