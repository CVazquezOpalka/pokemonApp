import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Serchbar from "./component/SerchBar/Serchbar";
import Pokedex from "./component/Results/Pokedex";
import { useState, useEffect } from "react";
import { allPokemon, getPokemonData } from "./fetchApi/api";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const data = await allPokemon(24, 24 * page);
      //console.log(data)
      const promise = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promise);
      setPokemon(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 24));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [page]);

  return (
    <div>
      <Navbar />
      <div className="App">
        <Serchbar />

        {
          <Pokedex
            loading={loading}
            pokemons={pokemon}
            page={page}
            setPage={setPage}
            total={total}
          />
        }
      </div>
    </div>
  );
}

export default App;
