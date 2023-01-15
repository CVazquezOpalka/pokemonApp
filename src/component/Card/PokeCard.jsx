import React from "react";

const PokeCard = (props) => {
  const pokemon = props.pokemon;

  const addFavorite = (e) => {
    console.log(`agregue a ${pokemon.name} a favoritos`);
  };
  return (
    <div className="pokemon-card">
      <div className="pokemon-img">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div># {pokemon.id}</div>
        </div>
        <div className="card-botton">
          <div className="pokemon-type">
            {pokemon.types.map((type, idx) => {
              return (
                <div key={idx} className="pokemon-type-text">
                  {type.type.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="pokemon-favorite">
          <button onClick={addFavorite}>Like!</button>
        </div>
      </div>
    </div>
  );
};

export default PokeCard;
