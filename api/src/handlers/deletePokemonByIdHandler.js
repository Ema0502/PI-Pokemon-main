const { deletePokemon } = require("../controllers/deletePokemon");

const deletePokemonByIdHandler = async (req, res) => {
  try {
    //Se recibe el id y se envia al controller para el delete
    const { id } = req.params;
    const deleteResponse = await deletePokemon(id);
    res.status(200).send(deleteResponse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  deletePokemonByIdHandler,
};