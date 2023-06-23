const { putPokemon } = require("../controllers/putPokemon");

const putPokemonHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, hp, image, attack, defense, speed, height, weight, pokemonTypes } = req.body;
    //Se crea un objeto con las modificaciones que lleguen por body y, si existen, se agregan
    const modifications = {};
    if (name) modifications.name = name;
    if (hp) modifications.hp = hp;
    if (image) modifications.image = image;
    if (attack) modifications.attack = attack;
    if (defense) modifications.defense = defense;
    if (speed) modifications.speed = speed;
    if (height) modifications.height = height;
    if (weight) modifications.weight = weight;
    if (pokemonTypes) modifications.pokemonTypes = pokemonTypes;
    //Cuando todas las modificaciones estan listas, se mandan al controller
    const pokemonModified = await putPokemon(id, modifications);
    return res.status(200).json(pokemonModified);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  putPokemonHandler,
};