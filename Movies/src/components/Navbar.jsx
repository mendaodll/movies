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
    <nav id="navbar" className="flex justify-between items-center py-4 px-2 min-h-20">
      <h2>
        <Link to="/" className="flex items-center gap-[.5rem] " >
          <Clapperboard className=" ml-2 text-3xl text-foreground"/>
          <p className="text-xl tracking-tighter text-foreground">Movies Library</p>
        </Link>
      </h2>
      <form onSubmit={handleSubmit} className="flex gap-[.5rem]">
      <Search className="h-4 w-7 text-muted-foreground absolute top-[32px] ml-1" />
        <Input
          type="text"
          placeholder="Search movies..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="pl-8 mr-4"
        />
      </form>
    </nav>
  );
};

export default Navbar;
