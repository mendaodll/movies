import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'

import { CircleDollarSign, LineChart, Hourglass, FileText } from "lucide-react";

import MovieCard from '../components/MovieCard'


const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;



const Movie = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)

  const getMovie = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    setMovie(data)
    console.log(data);
  }

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    })
  }

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`
    getMovie(movieURL)
  }, [])

  return (
    <div className="flex flex-col items-center w-full max-w-screen justify-center">
      {movie &&
      <>
        <MovieCard movie={movie} showLink={false} showButton={false}/>
        <div className="flex flex-wrap flex-col gap-2 py-4 mb-4">
        <p className="text-lg mt-4 mb-4 text-center font-semibold">{movie.tagline}</p>
        <div className="flex flex-wrap max-w-lg gap-2">
          <CircleDollarSign className="h-6 w-7 text-amber-300"/>
          <h3> Orçamento:</h3>
          <p>{formatCurrency(movie.budget)}</p>
        </div>

        <div className="flex items-center flex-wrap max-w-lg gap-2">
          <LineChart className="h-6 w-7 text-amber-300"/>
          <h3>Receita:</h3>
          <p>{formatCurrency(movie.revenue)}</p>
        </div>

        <div className="flex items-center flex-wrap max-w-lg gap-2">
          <Hourglass className="h-6 w-7 text-amber-300"/>
          <h3>
             Duração:
          </h3>
          <p>{movie.runtime} minutos</p>
        </div>

        <div className="flex items-center flex-wrap max-w-lg gap-2">
        <FileText className="h-6 w-7 text-amber-300"/>
          <h3>Descrição:</h3>
          <p className="text-justify tracking-tighter text-md font-semibold">{movie.overview}</p>
        </div>
        </div>
      </>}
    </div>
  )
}

export default Movie



