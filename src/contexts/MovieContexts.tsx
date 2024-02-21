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
      rating: 1,
      genre: "Romance",
      description:
        "Well I thought I would see what all the fuss was about and boy did I wish I hadn't I have seen very bad romantic comedies that are better than this film",
    },
    {
      title: "The Lord of the Rings",
      rating: 4,
      genre: "Fantasy",
      description:
        "Simply incredible. Never before have I seen a 3 hour movie that didn't seem like 3 hours!",
    },
    {
      title: "Annihilation",
      rating: 2,
      genre: "Sci-fi",
      description:
        "Lena, a biologist, is in a daze. Her soldier husband is missing in action and without him, she is struggling to focus on what remains of her life.",
    },
    {
      title: "Frozen",
      rating: 5,
      genre: "Children",
      description:
        "Featuring terrific female characters, endlessly funny sidekicks and a genuinely jaw-dropping score, this is the best film from Disney in close to a generation.",
    },
  ]);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
}
