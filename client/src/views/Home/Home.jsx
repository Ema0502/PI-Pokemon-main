import style from "./Home.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/actions";
import NavBar from "../../components/NavBar/NavBar";
import Cards from "../../components/Cards/Cards";

const Home = () => {
  const dispatch = useDispatch();
  const allPokemons = useSelector( (state) => state.allPokemons ) //Acceso al estado global
  const [page, setPage] = useState(1);  // Estado local para el numero de página
  const [pageLength, setPageLength] = useState(12); // Estado local para la cantidad de cards por pagina

  const maximum = allPokemons.length / pageLength;  // Cálculo del maximo numero de paginas para el paginado

  useEffect(() => {
    dispatch(getPokemons());
    return (() => {
      console.log("componente desmontado");
    })
  }, [dispatch, setPageLength]);

  return (
    <div className={style.home}>
      <NavBar />
      {/* Se pasan los datos relevantes como props al componente Cards y Paginated */}
      <Cards allPokemons={allPokemons} page={page} setPage={setPage} maximum={maximum} pageLength={pageLength} />
    </div>
  );
};

export default Home;
