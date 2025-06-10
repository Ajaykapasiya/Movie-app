import React from "react";
import MovieCard from "../components/movieCard";
import { useState } from "react";


function Home() {
    const [searchQuery , setSearchQuery] = useState("")
  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Welcome", release_date: "2014" },
    
  ];

  const handleSearch = () => {
    alert(searchQuery)
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      <div className="movies-grid">
        {movies.map((movies) => (
          <MovieCard movie={movies} key={movies.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
