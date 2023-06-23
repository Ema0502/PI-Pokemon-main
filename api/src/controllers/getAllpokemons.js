const axios = require("axios");

const getAllPokemons = async () => {
  //Obtenemos todos los pokemons de la api
  const { data } = await axios("https://pokeapi.co/api/v2/pokemon/");
  const allResults = [...data.results];
  while (data.next) {
    const response = await axios(data.next); // Hacer una petición a la siguiente página
    allResults.push(...response.data.results); // Agregar los resultados al arreglo
    data.next = response.data.next; // Actualizar el enlace a la siguiente página
  }
  return allResults;
};

module.exports = {
  getAllPokemons
};