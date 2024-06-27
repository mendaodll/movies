import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { socialMedia } from "../../data/index";

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
};

export default Home;
