import style from "./Card.module.css";
import { NavLink } from "react-router-dom";

const Card = ({pokemon}) => {

  const { id, name, image, pokemonTypes } = pokemon;
   // Obtener los nombres de los tipos
   const typeNames = pokemonTypes?.map((type) => type.type.name);

  return (
    <div className={style["card-container"]}>
      {/* El navLink se encarga de enviar al usuario al detail de esta card */}
      <NavLink to={`/home/${id}`}>
        <img src={image} alt="" className={style["image-pokemon"]} />
        <div className={style["box-text"]}>
          <h3>Nombre: {name}</h3>
          <h3>Tipos: {typeNames?.join(", ")}</h3>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;

