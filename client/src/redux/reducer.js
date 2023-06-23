import { GET_All_POKEMONS, GET_All_TYPES, GET_BY_NAME, GET_BY_DETAIL } from "./action-types";

const initialState = {
  allPokemons: [],
  allTypes: [],
  pokemonDetail: []
}

// Define el reducer que actualiza el estado en función de las acciones
const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    // Caso para la accion de obtener todos los pokemon
    case GET_All_POKEMONS:
      return {
        ...state, 
        allPokemons: payload
      }
    // Caso para la accion de obtener todos los tipos de pokemon
    case GET_All_TYPES:
      return {
        ...state, 
        allTypes: payload
      }
    // Caso para la accion de obtener un pokemon por nombre
    case GET_BY_NAME:
      return {
        ...state,
        allPokemons:payload
      }
    // Caso para la acción de obtener un pokémon por ID
    case GET_BY_DETAIL:
      return {
        ...state,
        pokemonDetail: payload
      }
      // Cuando no se reconoce el tipo de accion, se retorna el estado actual sin realizar cambios
    default:
      return {
        ...state
      }
  }   
};

export default reducer;
