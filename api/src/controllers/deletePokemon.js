const { Pokemons } = require("../db");

const deletePokemon = async (id) => {
  //Se recibe el id, se busca en la db la coincidencia y se elimina
  const pokemonDelete = await Pokemons.destroy({
    where:
      { id }
  });
  if (pokemonDelete) return `Character with ID: ${id} deleted in the DB successfully`;
  //Si hay algun error y no pudo eliminarse el pokemon, se manda un error al handler
  throw new Error(`Failed to delete pokemon with ID: ${id}`);
};

module.exports = {
  deletePokemon,
};