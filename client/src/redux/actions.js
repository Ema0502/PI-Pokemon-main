import { GET_All_POKEMONS, GET_All_TYPES, GET_BY_NAME, GET_BY_DETAIL } from "./action-types";
import axios from "axios"

// Accion asincronica para obtener todos los pokemon
export const getPokemons = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios("http://localhost:3001/pokemons");
      return dispatch({
        type: GET_All_POKEMONS,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
};
// Accion asincronica para obtener todos los typos de pokemon
export const getTypes = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios("http://localhost:3001/types");
      return dispatch({
        type: GET_All_TYPES,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
};
// Accion asincronica para obtener un pokemon por nombre
export const getByName = (name) => {
  return async function (dispatch) {
    try {
      const { data } = await axios(`http://localhost:3001/search?name=${name}`);
      return dispatch({
        type: GET_BY_NAME,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
};
// Accion asincronica para obtener los detalles de un pokemon por id
export const getByDetail = (id) => {
  return async function (dispatch) {
    try {
      const { data } = await axios(`http://localhost:3001/pokemons/${id}`);
      return dispatch({
        type: GET_BY_DETAIL,
        payload: data
      });
    } catch (error) {
      console.log(error.message);
    }
  }
};
