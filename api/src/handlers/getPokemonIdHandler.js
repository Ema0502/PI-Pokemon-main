const { getPokemonById } = require("../controllers/getPokemonById");

const getPokemonIdHandler = async (req, res) => {
  try {
    //se trae el id y se envia al controller
    const { id } = req.params;
    const pokemon = await getPokemonById(id);
    return res.status(200).json(pokemon);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getPokemonIdHandler,
};
