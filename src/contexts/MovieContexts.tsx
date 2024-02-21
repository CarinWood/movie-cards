import { ReactNode, createContext, useContext, useState } from "react";

type movieContext = {
  movies: movieItem[];
  setMovies: React.Dispatch<React.SetStateAction<movieItem[]>>;
};

type movieItem = {
  title: string;
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
      rating: 5,
      genre: "Fantasy",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quia repellendus, corporis ab repudiandae cum iste ex molestias perspiciatis sequi?",
    },
    {
      title: "Fifty Shades of Grey",
      rating: 3,
      genre: "Romance",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quia repellendus, corporis ab repudiandae cum iste ex molestias perspiciatis sequi?",
    },
    {
      title: "The Lord of the Rings",
      rating: 4,
      genre: "Fantasy",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quia repellendus, corporis ab repudiandae cum iste ex molestias perspiciatis sequi?",
    },
    {
      title: "Annihilation",
      rating: 2,
      genre: "Sci-fi",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quia repellendus, corporis ab repudiandae cum iste ex molestias perspiciatis sequi?",
    },
    {
      title: "Frost",
      rating: 5,
      genre: "Children",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quia repellendus, corporis ab repudiandae cum iste ex molestias perspiciatis sequi?",
    },
  ]);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
}
