import React from "react";
import MovieCard from "../components/movieCard";

function Home() {
  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Welcome", release_date: "2014" },
    { id: 3, title: "MI-1", release_date: "1996" }, 
    { id: 4, title: "Atonment", release_date: "2019" },
  ];

  return (
    <div className="home">
      <div className="movies-grid">
        {movies.map((movies) => (
          <MovieCard movie={movies} key={movies.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
