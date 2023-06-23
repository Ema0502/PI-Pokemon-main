const { createAllPokemonsDb } = require("../controllers/createAllPokemonsDb");
const { Pokemons } = require("../db");

const getAllPokemonsHandler = async (req, res) => {
  try {
    //Se consulta si hay registros en la base de datos, si los hay, devuelve todos los pokemons
    const countDB = await Pokemons.count();
    if (countDB) {
      const allPokemonsDB = await Pokemons.findAll();
      return res.status(200).json(allPokemonsDB);
    }
    //Si no hay registros en la base de datos, obtenemos los pokemons de la api y se guardan en la db con el controller
    const createPokemonsDb = await createAllPokemonsDb();
    return res.status(200).json(createPokemonsDb);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllPokemonsHandler,
};
