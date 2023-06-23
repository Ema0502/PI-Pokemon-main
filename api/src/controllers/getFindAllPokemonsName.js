const { Pokemons } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");

const getFindAllPokemonsName = async (name) => {
  //Se trae todo las coincidencias en la db
  const dbResults = await Pokemons.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });

  let pokemonNameApi = {};
  try {
    //Se busca la coincidencia en la api
    const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`);
    //Se guarda solo la informacion necesaria para el resultado
    pokemonNameApi = {
      id: data.id,
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
  } catch (error) {
    //Si la api no encuentra el pokemon, se cambia pokemonIdApi a null para evitar errores en la respuesta
    pokemonNameApi = null;
  }

  //Si la api tiene la informacion, se retorna lo encontrado en ambas
  if (pokemonNameApi) return [pokemonNameApi];
  if (dbResults) return [dbResults];
  throw new Error(`${name} not found`);
}

module.exports = {
  getFindAllPokemonsName,
}