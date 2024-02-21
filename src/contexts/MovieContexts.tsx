import { ReactNode, createContext, useContext, useState } from "react";

type movieContext = {
  movies: movieItem[];
  setMovies: React.Dispatch<React.SetStateAction<movieItem[]>>;
};

type movieItem = {
  title: string;
  img: string;
  rating: number;
  genre: string;
  description: string;
};

export const MovieContext = createContext({} as movieContext);

export function useMovieContext() {
  return useContext(MovieContext);
}

export function MovieContextProvider({ children }: { children: ReactNode }) {
  const [movies, setMovies] = useState<movieItem[]>([
    {
      title: "The Hunger Games",
      img: "https://catalog.cinema-api.com/cf/images/ncg-images/47ee69012f77434aab2cce9b610f678e.jpg?width=240&version=7F93803242749F6D7089D44E612A0739&format=webp",
      rating: 5,
      genre: "Fantasy",
      description: "blabla",
    },
    {
      title: "Fifty Shades of Grey",
      img: "https://upload.wikimedia.org/wikipedia/en/5/5e/50ShadesofGreyCoverArt.jpg",
      rating: 3,
      genre: "Romance",
      description: "blabla",
    },
    {
      title: "The Lord of the Rings",
      img: "https://upload.wikimedia.org/wikipedia/en/f/fc/The_Lord_of_the_Rings%2C_T2T_%282002%29.jpg",
      rating: 4,
      genre: "Fantasy",
      description: "blabla",
    },
    {
      title: "Annihilation",
      img: "https://img-cdn.sfanytime.com/COVERM/COVERM_4413b43a-6729-411a-bf6a-c164368b3527_01.jpg?w=375&ar=0.692&fit=crop&fm=pjpg&s=391d8bd896a46fb5a09546d2650b6e2a",
      rating: 2,
      genre: "Sci-fi",
      description: "blabla",
    },
    {
      title: "Frost",
      img: "https://img-cdn.sfanytime.com/COVERM/COVERM_4c5a6301-1879-46dc-8533-f6ec5509934c_sv.jpg?w=375&ar=0.692&fit=crop&fm=pjpg&s=366cf47f3159e9bfa167f61f7e255069",
      rating: 5,
      genre: "Children",
      description: "blabla",
    },
  ]);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
}
