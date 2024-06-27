import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import { socialMedia } from "../../data/index"

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
    <main>
      <div className="grid grid-cols-1">
        <h2 className="text-2xl text-center py-4 mb-4 text-zinc-400">
          Resultados para: <span className="text-foreground">{query}</span>
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} showButton={true} />
            ))}
        </div>
      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center sm:pl-4 pb-4'>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Lucas Mendes</p>
            
            <div className='flex items-center md:gap-3 gap-6 sm:pr-4'>
            {socialMedia.map((profile) => (
                <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-background rounded-full border border-black-300 mt-6 md:mt-0'>
                 <a href={profile.link} target='_blank'>
                    <img 
                        src={profile.img} 
                        alt={profile.des}
                        width={20}
                        height={20}
                        />
                 </a>
                </div>
            ))}
            </div>
            
        </div>
    </main>
  );
}

export default Search