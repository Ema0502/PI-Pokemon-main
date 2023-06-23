const axios = require("axios");
const { Pokemons } = require("../db");

const getPokemonById = async (id) => {
  //Si hay un pokemon con es id recibido, lo retornamos
  const pokemonIdDb = await Pokemons.findByPk(id);
  if (pokemonIdDb) return pokemonIdDb;
  //Si no hay ID en la DB, recurrimos a la API
  const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!data.results.id) throw new Error(`ID: ${id} not found`); // Si la respuesta no incluye un ID, se lanza un error
  //Se extrae solamente los datos solicitados de la api y se los retorna
  const pokemonIdApi = {
    id,
    name: data.name,
    image:
      data.sprites.other?.["dream_world"]?.front_default ||
      data.sprites.other?.["home"]?.front_default ||
      data.sprites.other?.["official-artwork"]?.front_default ||
      data.sprites["front_default"] ||
      "image not found",
    hp: data.stats[0].base_stat,
    attack: data.stats[1].base_stat,
    defense: data.stats[2].base_stat,
    speed: data.stats[5].base_stat,
    height: data.height,
    weight: data.weight,
    pokemonTypes: data.types,
  };
  return pokemonIdApi;
}

module.exports = {
  getPokemonById,
};