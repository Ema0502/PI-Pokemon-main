import style from "./Detail.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getByDetail } from "../../redux/actions"
import NavBar from "../../components/NavBar/NavBar";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemonDetail = useSelector((state) => state.pokemonDetail )

  useEffect(() => {
    dispatch(getByDetail(id));
  }, [dispatch, id]);

  return (
    <div className={style["body-bg"]}>
      <NavBar/>
      <div className={style["card-container"]}>
      <img src={pokemonDetail.image} alt="" className={style["image-pokemon"]} />
      <div className={style["box-text"]}>
        <h3>ID: {id}</h3>
        <h3>Nombre: {pokemonDetail.name}</h3>
        <h3>HP: {pokemonDetail.hp}</h3>
        <h3>Ataque: {pokemonDetail.attack}</h3>
        <h3>Defensa: {pokemonDetail.defense}</h3>
        <h3>Velocidad: {pokemonDetail.speed}</h3>
        <h3>Tamaño: {pokemonDetail.height}</h3>
        <h3>Peso: {pokemonDetail.weight}</h3>
        <h3>Tipos: {pokemonDetail.pokemonTypes?.map((type) => {
          return <div key={type.id}>
          <h3>{type.type.name}</h3>
        </div>
        })}</h3>
      </div>
    </div>
    </div>
  );
};

export default Detail;
