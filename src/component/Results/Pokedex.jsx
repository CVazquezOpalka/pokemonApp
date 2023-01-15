import React from "react";
import PokeCard from "../Card/PokeCard";
import Pagination from "../pagination/Pagination";

const Pokedex = (props) => {
  const { pokemons, page, setPage, total, loading } = props;

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total);
    setPage(nextPage);
  };
  
  return (
    <div>
      <div className="header">
        <h1>POKEDEX</h1>
        <div>
          <Pagination
            page={page + 1}
            totalPages={total}
            onLeftClick={lastPage}
            onRigthClick={nextPage}
          />
        </div>
      </div>
      { loading ? <div>CARGANDOOOOO.....</div> :
      <div className="pokedex-grid">
        {pokemons.map((pokemon, idx) => {
          return <PokeCard pokemon={pokemon} key={pokemon.name} />;
        })}
      </div>
      }
    </div>
  );
};

export default Pokedex;
