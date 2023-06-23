import { useState } from "react";
import style from "./Paginated.module.css";

const Paginated = ({page, setPage, maximum}) => {
  // Estado local para el valor del input de paginacion
  // Se usa este estado para que se setee el estado solamente cuando se presione enter en el input 
  const [input, setInput] = useState(1);

  // Función para ir a la pagina anterior
  const previusPage = () => {
    setInput(parseInt(input) - 1);
    setPage(parseInt(page) - 1);
  }

  // Función para ir a la pagina siguiente
  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setPage(parseInt(page) + 1);
  }

  // Manejar el evento keyDown del input de paginacion
  const onKeyDown = (event) => {
    // keyCode hace referencia a la tecla enter
    if (event.keyCode === 13) {
      setPage(parseInt(event.target.value));
      // Se valida que el valor ingresado sea valido, si es un string o boleano, o un numero menor o mayor a los limites, se setea a la pagina 1
      if (
        parseInt(event.target.value < 1) ||
        parseInt(event.target.value) > Math.ceil(maximum) ||
        isNaN(parseInt(event.target.value))
      ) {
        setPage(1);
        setInput(1);
      } else {
        setPage(parseInt(event.target.value));
      }
    }
  };

  // Manejar el evento onChange del input de paginación
  const onChange = event => {
    setInput(event.target.value);
  };

  return (
    <div className={style.container}>
      {/* Botón para ir a la página anterior */}
      <button onClick={previusPage} className={style["button-navBar"]} disabled={page <= 1}>anterior</button>
      {/* Input de paginación */}
      <input className={style.SearchBar} name="page" value={input} onChange={(event) => onChange(event)} onKeyDown={(event) => onKeyDown(event)} />
      {/* Texto que muestra la página actual y el máximo de páginas */}
      <p>de {Math.ceil(maximum)}</p>
      {/* Botón para ir a la página siguiente */}
      <button onClick={nextPage} className={style["button-navBar"]} disabled={page >= maximum}>siguiente</button>
    </div>
  )
};

export default Paginated;
