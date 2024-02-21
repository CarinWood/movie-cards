import { useMovieContext } from '../../contexts/MovieContexts'
import MovieCard from '../movieCard/MovieCard';

const MovieList = () => {
    const {movies} = useMovieContext()
  return (
    <>
    {movies.map((movie, i) => {
       return <div key={i}> <MovieCard title={movie.title} rating={movie.rating} description={movie.description} genre={movie.genre}/></div>
    })}
  </>
  )
}

export default MovieList