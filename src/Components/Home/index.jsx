import {Container, Opcoes} from "./style";
import { IoShareOutline,IoAddCircleOutline,IoRemoveCircleOutline } from "react-icons/io5";
import {Link} from "react-router-dom";

function Home(props) {

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
                
                <button type="submit">
                    <Link to ="/operacoes/entrada" style={{ textDecoration: 'none'} } className = "btn-operacoes">
                        <IoAddCircleOutline className="icon"/>
                        <p>Nova <br/>entrada</p>
                    </Link>
                </button>
                        
                <button type="submit" onClick={()=> props.operacao()}>
                    <Link to ="/operacoes/saída" style={{ textDecoration: 'none'} } className = "btn-operacoes">
                        <IoRemoveCircleOutline className="icon"/>
                        <p>Nova <br/>saida</p> 
                    </Link>
                </button>
                
            </Opcoes>
            
        </Container>
    )
}

export default Home;