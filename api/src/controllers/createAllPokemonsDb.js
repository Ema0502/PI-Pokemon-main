const { getAllPokemons } = require("./getAllpokemons");
const axios = require("axios");
const { Pokemons } = require("../db");

const createAllPokemonsDb = async () => {
  //Si en el handler no hay registros en la db, se obtiene los pokemons de la api
  const allPokemonsApi = await getAllPokemons();
  //Se le al promise.all, el arreglo de promesas que retorna el map
  const allPokemonsArray = await Promise.all(
    allPokemonsApi.map(async (pokemon) => {
      //La informacion de cada pokemon se encuentra en la propiedad url
      const { data } = await axios(pokemon.url);
      return {
        id: data.id,
        name: pokemon.name,
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
    })
  );
  //Al ser un arreglo con objetos, se usa bulkCreate para crear multiples registros en la db
  await Pokemons.bulkCreate(allPokemonsArray);
  return allPokemonsArray;
};

module.exports = {
  createAllPokemonsDb,
};