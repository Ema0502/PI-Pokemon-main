const { deletePokemonByName } = require("../controllers/deletePokemonByName");

const deletePokemonByNameHandler = async (req, res) => {
  try {
    //En esta ocacion, los name de la api y db, son unicos como los id, por lo que puede eliminarse por name
    //Se trae el name y se envia al controller, se lo pasa en minusculas para evitar errores
    const { name } = req.query;
    const deleteResponse = await deletePokemonByName(name.toLowerCase());
    res.status(200).json(deleteResponse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  deletePokemonByNameHandler,
};