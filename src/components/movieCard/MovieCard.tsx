import { FC } from 'react'
import './movieCard.css'

type movieProps = {
  title: string
}

const MovieCard:FC<movieProps> = ({title}) => {
  return (
    <p className='card-title'>{title}</p>
  )
}

export default MovieCard