import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input } from "./ui/input";
import { Clapperboard, Search } from "lucide-react";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav id="navbar" className="bg-background flex items-center justify-between py-4 pr-2 min-h-20 w-screen">
      <div className="max-w-10 sm:max-w-none md:ml-2">
      <h2>
        <Clapperboard className="absolute ml-2 text-3xl text-foreground"/>
        <Link to="/" className="flex items-center gap-[.5rem] ml-10" >
          <p className="text-lg tracking-tighter text-foreground">Home</p>
        </Link>
      </h2>
      </div>
      <div className="flex max-w-xs justify-center items-center">
      <h2>
      <Link to="/popular" className="flex items-center gap-[.5rem] ml-10" >
          <p className="text-lg tracking-tighter text-foreground">Populares</p>
        </Link>
      </h2>
      <h2>
      <Link to="/nowplaying" className="flex items-center gap-[.5rem] ml-10" >
          <p className="text-lg tracking-tighter text-foreground">Lançamentos</p>
        </Link>
      </h2>
      <h2>
      <Link to="/upcoming" className="flex items-center gap-[.5rem] ml-10" >
          <p className="text-lg tracking-tighter text-foreground">Breve</p>
        </Link>
      </h2>
      </div>
      <div className="max-w-28 md:max-w-none md:mr-4">
        <form onSubmit={handleSubmit} className="flex gap-[.5rem]">
        <Search className="h-4 w-7 text-muted-foreground absolute top-[32px] ml-1" />
          <Input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="pl-8 mr-4"
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
