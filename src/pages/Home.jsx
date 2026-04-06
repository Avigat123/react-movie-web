import MovieCard from "../components/MovieCard"
import { useState, useEffect } from "react"
import "../css/Home.css"
import { getPopularMovies, searchMovies } from "../services/api"

function Home(){

    const[movies,setMovies] = useState([]);
    const[error, setError] = useState(null);
    const[loading,setLoading] = useState(true);

    useEffect(()=>{
        const loadPopularMovies = async () =>{
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }catch(err){
                console.log(err)
                setError("failed to load movies ..")    
            }
            finally{
                setLoading(false)
            }
        }
        loadPopularMovies()
    },[])
    
    const handleSearch = async (e) =>{    
        e.preventDefault(); // prevents default behaviour {removing the movie name on clicking search by reloading}
  if (!searchQuery.trim()) return
    if (loading) return

    setLoading(true)
    try {
        const searchResults = await searchMovies(searchQuery)
        setMovies(searchResults)
        setError(null)
    } catch (err) {
        console.log(err)
        setError("Failed to search movies...")
    } finally {
        setLoading(false)
    }}
    
    const [searchQuery, setSearchQuery] = useState("")

      return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

        {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies?.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home
