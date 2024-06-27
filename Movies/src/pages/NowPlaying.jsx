import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const NowPlaying = () => {
    const [releasedMovies, setReleasedMovies] = useState([]);

    const getReleasedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setReleasedMovies(data.results);
        console.log(data);
    };

    useEffect(() => {
       const releasedUrl = `${moviesURL}now_playing?${apiKey}`;
        
       getReleasedMovies(releasedUrl);

    }, []);


  return (
    <div className="flex h-full min-h-screen flex-wrap justify-center xl:flex-col">
      <h2 className="text-2xl text-center py-4 mb-4 mt-4 tracking-tight font-normal">Lançamentos </h2>
      <div className="flex flex-wrap justify-center xl:max-w-screen-3xl gap-8">
      {releasedMovies.length === 0 && <p>Carregando...</p>}
        {releasedMovies.length > 0 &&
          releasedMovies.map((released) => <MovieCard key={released.id} movie={released} showButton={true} />)}
      </div>
    </div>
  )
}

export default NowPlaying