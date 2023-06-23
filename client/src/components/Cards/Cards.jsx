import style from "./Cards.module.css";
import Card from "../Card/Card";
import Paginated from "../Paginated/Paginated";

const Cards = ({allPokemons, page, setPage, pageLength, maximum}) => {
  return (
    <div>
      <div className={style["cards-list"]}> 
      {/* Se itera sobre la lista de pokemon y creamos un componente Card para cada uno */}
      {/* En el slice se usa una formula para marcar que cards se renderizan en el estado local page */}
      {
        allPokemons
        .slice((page - 1) * pageLength, (page - 1) * pageLength + pageLength )
        .map((pokemon) => {
          return <Card pokemon={pokemon} />
        })
      }
      </div>
      {/* Se pasan las props necesarias a Paginated */}
      <Paginated page={page} setPage={setPage} maximum={maximum} />
    </div>
  );
};

export default Cards;
