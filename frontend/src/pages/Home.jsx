import React from "react";
import MovieCard from "../components/movieCard";
import { useState , useEffect} from "react";
import '../css/Home.css'
import { searchMovies , getPopularMovies } from "../services/api";

function Home() {
    const [searchQuery , setSearchQuery] = useState("")
    const [movies , setMovies] = useState([]);
    const [error ,setError] = useState(null);
    const [loading , setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }catch (err) {
                console.log(err);
                
                setError('failed')
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    } ,[])

  const handleSearch = (e) => {
    e.preventDefault()
    alert(searchQuery)
    setSearchQuery('-------')
  };

    if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>

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
