const { getFindAllPokemonsName } = require("../controllers/getFindAllPokemonsName");

const getPokemonNameHandler = async (req, res) => {
  try {
    const { name } = req.query;
    //Convierte el nombre a minusculas para evitar errores con la db o api
    const allFindResults = await getFindAllPokemonsName(name.toLowerCase());
    return res.status(200).json(allFindResults);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getPokemonNameHandler,
};