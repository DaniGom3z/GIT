import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioTarea from "./components/FormularioTareas";

function App() {
  return (
    <>
      <Container className="my-5 main">
        <h1 className="display-4 text-center text-light">Lista de actividades</h1>
        <hr />
        <FormularioTarea></FormularioTarea>
      </Container>
    </>
  );
}

export default App;
