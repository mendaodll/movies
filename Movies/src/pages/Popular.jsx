import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Popular = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    const getPopularMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setPopularMovies(data.results);
        console.log(data);
    };

    useEffect(() => {
       const popularUrl = `${moviesURL}popular?${apiKey}`;
        
       getPopularMovies(popularUrl);

    }, []);

  return (
    <div className="flex h-full min-h-screen flex-wrap justify-center xl:flex-col">
      <h2 className="text-2xl text-center py-4 mb-4 mt-4 tracking-tight font-normal">Em Alta</h2>
      <div className="flex flex-wrap justify-center xl:max-w-screen-3xl gap-8">
      {popularMovies.length === 0 && <p>Carregando...</p>}
        {popularMovies.length > 0 &&
          popularMovies.map((popular) => <MovieCard key={popular.id} movie={popular} showButton={true} />)}
      </div>
    </div>
  )
}

export default Popular