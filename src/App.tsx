
import { MovieContextProvider } from "./contexts/MovieContexts";
import Home from "./pages/Home";

export function App() {
  return (
    <div className="app">
      <MovieContextProvider>
      <Home/>
      </MovieContextProvider>
    </div>
  );
}
