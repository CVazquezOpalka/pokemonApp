export const serchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const allPokemon = async (limit = 25, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
