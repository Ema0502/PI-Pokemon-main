const { Pokemons } = require("../db");

const putPokemon = async (id, modifications) => {
  //Se hace un desestructuring para saber si hubieron modificaciones
  //updatedCount representa la cantidad de registros actualizados
  const [updatedCount] = await Pokemons.update(modifications, {
    where: { id },
  });
  //Si hay modificaciones, que retorne el pokemon modificado
  if (updatedCount) {
    const updatedPokemon = await Pokemons.findByPk(id);
    return updatedPokemon;
  }
  //Si hay un error, lo recibe el handler
  throw new Error(`Failed to update pokemon with ID: ${id}`);
};

module.exports = {
  putPokemon,
};
