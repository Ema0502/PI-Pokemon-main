import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar"
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={style["navBar-container"]}>
      <div className={style["navBar"]}>
        {/* Boton para enviar al usuario ruta del home */}
        <NavLink to="/home" className={style["button-navBar"]}>Home</NavLink>
        {/* Boton para enviar al usuario ruta para crear un pokemon */}
        <NavLink to="/create" className={style["button-navBar"]}>Crear</NavLink>

        <SearchBar />
      </div>
    </div>
  );
};

export default NavBar;
