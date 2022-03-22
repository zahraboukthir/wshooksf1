import { useState } from "react";
import "./App.css";
import AddMovie from "./component/AddMovie";
import MovieList from "./component/MovieList";
import { movies } from "./data";
function App() {
  const [films, setFilms] = useState(movies);
  const handeladd = (newmovie) => {
    setFilms([...films, newmovie]);
  };
  return (
    <div className="App">
      <AddMovie handeladd={handeladd} />
      <MovieList movies={films} />
    </div>
  );
}

export default App;
