const { getAllTypes } = require("../controllers/getAllTypes");
const { Type } = require("../db");

const getAllTypesHandler = async (req, res) => {
  try {
    //Se consulta si hay registros en la db, si los hay, se retorna todos los types
    const countTypeDb = await Type.count();
    if (countTypeDb) {
      const allTypeDB = await Type.findAll();
      return res.status(200).json(allTypeDB);
    }
    //Si no hay registros en la db, se obtiene los types de la api y se guardan en la db con el controller
    const createTypesDb = await getAllTypes();
    return res.status(200).json(createTypesDb);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTypesHandler,
};