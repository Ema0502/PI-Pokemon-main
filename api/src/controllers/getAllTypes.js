const axios = require("axios");

const getAllTypes = async () => {
  //Se trae todos los types de la api
  const { data } = await axios("https://pokeapi.co/api/v2/type");
  const allTypes = data.results;
  //Se debe recorrer cada objeto para tener sus propiedades id y name
  const allTypesApi = await Promise.all(
    allTypes.map(async (type) => {
      //La informacion de cada type se encuentra en la propiedad url
      const { data } = await axios(type.url);
      return {
        id: data.id,
        name: data.name,
      };
    })
  );
  return allTypesApi;
};

module.exports = {
  getAllTypes,
};