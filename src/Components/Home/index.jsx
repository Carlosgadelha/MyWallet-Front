import {Container, Opcoes} from "./style";
import { IoShareOutline,IoAddCircleOutline,IoRemoveCircleOutline } from "react-icons/io5";

function Home() {
    return(
        <Container>
            <div className="header">
                <h1>Olá, {"Fulano"}</h1>
                <IoShareOutline  className="icon"/>
            </div>
            
            <div className="registros">
                <p>Não há registros de <br/> entrada ou saída</p>
            </div>
            <Opcoes>
                < button type="submit">
                    <IoAddCircleOutline className="icon"/>
                    <p>Nova <br/>entrada</p>
                </button>
                < button type="submit">
                    <IoRemoveCircleOutline className="icon"/>
                    <p>Nova <br/>saida</p> 
                </button>
            </Opcoes>
            
        </Container>
    )
}

export default Home;