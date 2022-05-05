import { Link } from "react-router-dom";
import Container from "./style";

function Cadastrar() {
    return(
        <Container>
            <h1>MyWallet</h1>
            < input type="input" placeholder="Nome" ></input>
            < input type="email" placeholder="E-mail" ></input>
            < input type="password" placeholder="Senha" ></input>
            < input type="password" placeholder="Confirme a senha" ></input>
            < button type="submit">Cadastrar</button>
            <Link to= "/">
                <p>Já tem uma conta? Entre agora!</p>
            </Link>
        </Container>
    )
}

export default Cadastrar;