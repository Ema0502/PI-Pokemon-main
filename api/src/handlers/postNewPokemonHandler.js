const { postNewPokemon } = require("../controllers/postNewPokemon");

const postNewPokemonHandler = async (req, res) => {
  try {
    //Para crear el nuevo pokemon, sacamos del body la informacion y se manda al controller
    const pokemonDataBody = req.body;
    const result = await postNewPokemon(pokemonDataBody);
    return res.status(200).json({ message: "Pokemon successfully created", data: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postNewPokemonHandler,
};