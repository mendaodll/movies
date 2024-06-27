import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Star } from "lucide-react";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true, showButton }) => {
  return (
    <>
      <Card className="flex items-center justify-center max-w-md border-[.1px] border-zinc-800 shadow-sm bg-background">
        <CardContent className="flex items-center flex-col justify-center flex-wrap gap-4 py-2 mb-2">
           <div className="mt-4">
            <img src={imageUrl + movie.poster_path} alt= {movie.title} />
           </div>
            <h2 className="text-xl tracking-tighter">{movie.title}</h2>
            <p className="flex gap-4 text-primary">
              <Star className=" text-yellow-500 "/>{movie.vote_average}
            </p>
           {showButton && 
            <Button className="w-full text-foreground rounded-lg mb-2 bg-zinc-800 hover:bg-zinc-300 hover:text-zinc-800">
              {showLink && <Link to={`/movie/${movie.id}`} className="font-semibold">Detalhes</Link>}
            </Button>
            }
        </CardContent>
      </Card>
    </>
  );
};

export default MovieCard;
