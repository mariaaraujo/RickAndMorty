import { Button } from "reactstrap";
import Especie from "./Filtragem/Especie";
import Genero from "./Filtragem/Genero";
import Status from "./Filtragem/Status";

const Filtro = ({setPageNumber, setStatus, setGender, setSpecies}) => {
    return (
        <div style={{display: 'flex', gap: '1rem', margin: '2rem'}}>
            <Status setPageNumber={setPageNumber} setStatus={setStatus} />
            <Especie setPageNumber={setPageNumber} setSpecies={setSpecies} />
            <Genero setPageNumber={setPageNumber} setGender={setGender} />
            <Button color="success" size="sm" onClick={() => window.location.reload()}>Limpar filtro</Button>
        </div>
    )
}

export default Filtro