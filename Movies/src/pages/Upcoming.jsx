import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Upcoming = () => {
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    const getUpcomingMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setUpcomingMovies(data.results);
        console.log(data);
    };

    useEffect(() => {
       const upcomingUrl = `${moviesURL}upcoming?${apiKey}`;
        
       getUpcomingMovies(upcomingUrl);

    }, []);
  return (
    <div className="flex h-full min-h-screen flex-wrap justify-center xl:flex-col">
      <h2 className="text-2xl text-center py-4 mb-4 mt-4 tracking-tight font-normal">Em Breve</h2>
      <div className="flex flex-wrap justify-center xl:max-w-screen-3xl gap-8">
      {upcomingMovies.length === 0 && <p>Carregando...</p>}
        {upcomingMovies.length > 0 &&
          upcomingMovies.map((upcoming) => <MovieCard key={upcoming.id} movie={upcoming} showButton={true} />)}
      </div>
    </div>
  )
}

export default Upcoming