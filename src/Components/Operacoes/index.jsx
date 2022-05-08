
import Container from "./style";
import {useParams} from "react-router-dom"

function Operacoes() {
    const {tipo} = useParams();
    return(
        <Container>
            <h1>Nova {tipo} </h1>
            < input type="number" placeholder="Valor" ></input>
            < input type="input" placeholder="Descrição" ></input>
            < button type="submit">Salvar {tipo}</button>
        </Container>
    )
}

export default Operacoes;