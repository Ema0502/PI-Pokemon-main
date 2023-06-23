const { Pokemons } = require("../db");

const postNewPokemon = async (pokemonDataBody) => {
  //Se hace un destructuring para mayor facilidad al leer el codigo
  const { id, name, image, hp, attack, defense, speed, height, weight, pokemonTypes } = pokemonDataBody;
  const newPokemon = {
    id,
    name,
    image,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    pokemonTypes,
  };
  //Se crea el nuevo pokemon en la db
  const pokemonCreate = await Pokemons.create(newPokemon);
  return pokemonCreate;
};

module.exports = {
  postNewPokemon,
};