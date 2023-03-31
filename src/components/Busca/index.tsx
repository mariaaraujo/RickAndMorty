import { Container } from "./style";

const Busca = ({ setName, setPageNumber }) => {
    return (  
        <Container>
            <input
            type="search"
            onChange={(e) => {
                setPageNumber(1)
                setName(e.target.value)
            }}
            className="input-search"
            placeholder="Pesquisar personagens"
            />
        </Container>
      )
}

export default Busca