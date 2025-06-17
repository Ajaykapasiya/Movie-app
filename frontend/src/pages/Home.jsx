import React from "react";
import MovieCard from "../components/movieCard";
import { useState } from "react";


function Home() {
    const [searchQuery , setSearchQuery] = useState("")
  const movies = [
    { id: 1, title: "John Wick", release_date: "2020" },
    { id: 2, title: "Welcome", release_date: "2014" },
    { id: 3, title: "MI-1", release_date: "1996" },
    { id: 4, title: "Atonment", release_date: "2019" },
  ];

  const handleSearch = (e) => {
    e.preventDefault()
    alert(searchQuery)
    setSearchQuery('-------')
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
        {movies.map((movies) => 
        movies.title.toLowerCase().startsWith(searchQuery) &&
        (
          <MovieCard movie={movies} key={movies.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
