const { Pokemons } = require("../db");

const deletePokemonByName = async (name) => {
  //Se busca en la db la coincidencia por name y se elimina
  const pokemonDelete = await Pokemons.destroy({
    where:
      { name },
  });
  if (pokemonDelete) return `Character with name: ${name} deleted in the DB successfully`;
  //Si ocurre un error y no puede eliminarse por name, se manda un error al handler
  throw new Error(`Failed to delete pokemon with name: ${name}`);
};

module.exports = {
  deletePokemonByName,
};
