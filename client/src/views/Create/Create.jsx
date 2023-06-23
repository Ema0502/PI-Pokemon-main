import style from "./Create.module.css";
import Form from "../../components/Form/Form";
import NavBar from "../../components/NavBar/NavBar";


const Create = () => {
  return (
    <div className={style["body-bg"]}>
      <NavBar />
      <Form />
    </div>
  );
};

export default Create;