import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
    console.log(data);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <main>
      <div className="flex h-full min-h-screen flex-wrap justify-center xl:flex-col">
        <h2 className="text-2xl text-center py-4 mb-4 mt-4 tracking-tight font-normal">
          Melhor Avaliados
        </h2>
        <div className="flex flex-wrap justify-center xl:max-w-screen-3xl gap-8">
          {topMovies.length === 0 && <p>Carregando...</p>}
          {topMovies.length > 0 &&
            topMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} showButton={true} />
            ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
