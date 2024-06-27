import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard from "../components/MovieCard"

const searchURL = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY


const Search = () => {
  const [searchParams] = useSearchParams()

  const [movies, setMovies] = useState([])

  const query = searchParams.get('q')

  const getSearchedMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovies(data.results)

  }

  useEffect(() => {

    const searchWithQueryURL = `${searchURL}?query=${query}&${apiKey}&`
 
    getSearchedMovies(searchWithQueryURL)

  }, [query])


  return (
    <div className="grid grid-cols-1">
    <h2 className="text-2xl text-center py-4 mb-4 text-zinc-400">
      Resultados para: <span className="text-foreground">{query}</span>
      </h2>
    <div className="flex flex-wrap items-center justify-center gap-8">
    {movies &&  
      movies.map((movie) =>
      <MovieCard key={movie.id}  movie={movie} showButton={true} />
     )}
    </div>
  </div>
  )
}

export default Search