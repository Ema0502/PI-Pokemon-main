import style from "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState(""); //este estado es para el input del searchBar

  //se evita que se resetee la pagina y al estado local le pasamos lo que se escribe en el input
  const handleChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  }
  //se hace este handle para que al buscar en el input, se haga un filtrado por nombre
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getByName(name));
  }

  return (
    <div className={style["search-bar"]} >
      <form>
        <input type="search" onChange={handleChange} className={style.SearchBar} placeholder={"Buscar..."} />
        <button type="submit" onClick={handleSubmit} className={style["button-navBar"]}>Buscar</button>
      </form>
    </div>
  );
};

export default SearchBar;
