import "./App.css";
import movies from "./assets/movies.json";

//console.log(movies);

function App() {
  return (
    <h2>
      {movies.map((movie) => {
        return <li key={movie.category}></li>;
      })}
    </h2>
  );
}

export default App;
