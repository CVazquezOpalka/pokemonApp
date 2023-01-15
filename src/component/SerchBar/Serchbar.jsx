import React from "react";
import { useState } from "react";
import { serchPokemon } from "../../fetchApi/api";

const Serchbar = () => {
  const [serch, setSerch] = useState("");
  const [pokemon, setPokemon] = useState();

  const onChange = (e) => {
    setSerch(e.target.value);
  };
  const onClick = async (e) => {
    const data = await serchPokemon(serch);
    console.log(data);
    setPokemon(data);
  };

  return (
    <div className="serchbar-body">
      <div className="serchbar">
        <input placeholder="Buscar Pokemon" onChange={onChange} />
      </div>
      <div className="serchbar-btn">
        <button onClick={onClick}>BUSCAR</button>
      </div>
    </div>
  );
};

export default Serchbar;
