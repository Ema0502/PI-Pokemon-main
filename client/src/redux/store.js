import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";

// Se utiliza la extension de Redux DevTools si esta disponible, sino se utiliza el metodo `compose` por defecto
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Se crea la store de Redux
const store = createStore(
  reducer,  // Se pasa el reducer para manejar las actualizaciones del estado
  composeEnhancer(applyMiddleware(thunkMiddleware)) // Se aplica el middleware Redux Thunk para manejar acciones asíncronas
);

export default store;