import { ReactNode, createContext, useContext, useState } from "react";


type movieContext =  {
    movies: movieItem[];
    setMovies: React.Dispatch<React.SetStateAction<movieItem[]>>
}

type movieItem = {
    title: string,
    rating: number,
    genre: string,
    description: string,
}


export const MovieContext = createContext({} as movieContext)

 export function useMovieContext() {
    return useContext(MovieContext)
} 



export function MovieContextProvider({children}: {children: ReactNode}) {
    const [movies, setMovies] = useState<movieItem[]>([]);

    return (
        <MovieContext.Provider value={{ movies, setMovies }}>
            {children}
        </MovieContext.Provider>
    )
}