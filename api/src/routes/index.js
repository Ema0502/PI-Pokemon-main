const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getAllPokemonsHandler } = require("../handlers/getAllPokemonHandler");
const { getPokemonIdHandler } = require("../handlers/getPokemonIdHandler");
const { getPokemonNameHandler } = require("../handlers/getPokemonNameHandler");
const { postNewPokemonHandler } = require("../handlers/postNewPokemonHandler");
const { getAllTypesHandler } = require("../handlers/getAllTypesHandler");
const { deletePokemonByIdHandler } = require("../handlers/deletePokemonByIdHandler");
const { deletePokemonByNameHandler } = require("../handlers/deletePokemonByNameHandler");
const { putPokemonHandler } = require("../handlers/putPokemonHandler");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/pokemons", getAllPokemonsHandler);
router.get("/pokemons/:id", getPokemonIdHandler);
router.get("/search", getPokemonNameHandler);
router.post("/pokemons", postNewPokemonHandler);
router.get("/types", getAllTypesHandler);
router.put("/pokemons/:id", putPokemonHandler);
router.delete("/pokemons/:id", deletePokemonByIdHandler);
router.delete("/pokemons", deletePokemonByNameHandler);

module.exports = router;