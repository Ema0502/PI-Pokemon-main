import style from "./Form.module.css";
import { useState } from "react";
import validation from "../Validation/validation";
import axios from "axios";

const Form = () => {
  //estado local para los los inputs
  const [input, setInput] = useState({
    id:"",
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "", 
    speed: "",
    height: "",
    weight: "",
    pokemonTypes: [],
  });
  //estado local para almacenar los errores y mostrar las validaciones
  const [error, setError] = useState({
    id:"campo obligatorio",
    name: "campo obligatorio",
    image: "campo obligatorio",
    hp: "campo obligatorio",
    attack: "campo obligatorio",
    defense: "campo obligatorio", 
    speed: "campo obligatorio",
    height: "campo obligatorio",
    weight: "campo obligatorio",
    pokemonTypes: "campo obligatorio",
  });
  //estado local para la respuesta en caso de ser exitosa
  const [response, setResponse] = useState("");

  const handleChange = (event) => {
    // Se actualiza el estado de los inputs con los valores actuales del formulario
    setInput({
      ...input,
      [event.target.name]: event.target.value
    })
    // Se valida el formulario y se actualiza el estado local de errores con los mensajes de errores correspondientes de la validacion
    setError(validation({ 
      ...input, 
      [event.target.name]: event.target.value 
    }))
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita el envío del formulario por defecto
    try {
      const { data } = await axios.post("http://localhost:3001/pokemons", input);
      setResponse(data); // Almacena la respuesta en el estado 'response'
    } catch (error) {
      console.error(error.message); // Manejo de errores en caso de que falle la solicitud
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style["body-form"]}>
      <div className={style["box-text"]}>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" value={input.id} onChange={handleChange} />
        {/* Muestra el mensaje de error si existe */}
        {error.id && <p style={{ color: "red" }}>{error.id}</p>}
      </div>

      <div className={style["box-text"]}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" value={input.name} onChange={handleChange} />
        {/* Muestra el mensaje de error si existe */}
        {error.name && <p style={{ color: "red" }}>{error.name}</p>}
      </div>

      <div className={style["box-text"]}>
        <label htmlFor="image">Imagen:</label>
        <input type="text" id="image" name="image" value={input.image} onChange={handleChange} />
        {/* Muestra el mensaje de error si existe */}
        {error.image && <p style={{ color: "red" }}>{error.image}</p>}
      </div>

      <div className={style["box-text"]}>
        <label htmlFor="hp">HP:</label>
        <input type="text" id="hp" name="hp" value={input.hp} onChange={handleChange} />
        {/* Muestra el mensaje de error si existe */}
        {error.hp && <p style={{ color: "red" }}>{error.hp}</p>}
      </div>

      <div className={style["box-text"]}>
        <label htmlFor="attack">Ataque:</label>
        <input type="text" id="attack" name="attack" value={input.attack} onChange={handleChange} />
        {/* Muestra el mensaje de error si existe */}
        {error.attack && <p style={{ color: "red" }}>{error.attack}</p>}
      </div>

      <div className={style["box-text"]}>
        <label htmlFor="defense">Defensa:</label>
        <input type="text" id="defense" name="defense" value={input.defense} onChange={handleChange} />
        {/* Muestra el mensaje de error si existe */}
        {error.defense && <p style={{ color: "red" }}>{error.defense}</p>}
      </div>

      <div className={style["box-text"]}>
        <label htmlFor="speed">Velocidad:</label>
        <input type="text" id="speed" name="speed" value={input.speed} onChange={handleChange} />
        {/* Muestra el mensaje de error si existe */}
        {error.speed && <p style={{ color: "red" }}>{error.speed}</p>}
      </div>

      <div className={style["box-text"]}>
        <label htmlFor="height">Tamaño:</label>
        <input type="text" id="height" name="height" value={input.height} onChange={handleChange} />
        {/* Muestra el mensaje de error si existe */}
        {error.height && <p style={{ color: "red" }}>{error.height}</p>}
      </div>

      <div className={style["box-text"]}>
        <label htmlFor="weight">Peso:</label>
        <input type="text" id="weight" name="weight" value={input.weight} onChange={handleChange} />
        {/* Muestra el mensaje de error si existe */}
        {error.weight && <p style={{ color: "red" }}>{error.weight}</p>}
      </div>

      <div className={style["box-text"]}>
        <label htmlFor="pokemonTypes">Tipo:</label>
        <input type="text" id="pokemonTypes" name="pokemonTypes" value={input.pokemonTypes} onChange={handleChange} />
        {/* Muestra el mensaje de error si existe */}
        {error.pokemonTypes && <p style={{ color: "red" }}>{error.pokemonTypes}</p>}
      </div>
      {/* Botón de envío */}
      <button type="submit" className={style["button-submit"]}>CREAR</button>

      {/* Muestra la respuesta si existe */}
      {response && <p>{response}</p>}
    </form>
  );
};

export default Form;