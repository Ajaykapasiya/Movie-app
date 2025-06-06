import "./App.css";
import MovieCard from "./components/movieCard";

function App() {
  const movienumber = 1;
  return (
    <>
      {movienumber === 1 ? (
        <MovieCard movie={{ title: "Welcome", release_date: "2016" }} />
      ) : (
        <MovieCard movie={{ title: "MI", release_date: "2025" }} />
      )}
    </>
  );
}

export default App;
