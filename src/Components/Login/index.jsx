import { Link } from "react-router-dom";
import Container from "./style";

function Login(){
    return(
        <Container>
            <h1>MyWallet</h1>
            < input type="email" placeholder="Email" ></input>
            < input type="password" placeholder="Senha" ></input>
            < button type="submit">Entrar</button>
            <Link to= "./Cadastrar">
                <p>Primeira vez? Cadastre-se!</p>
            </Link>
        </Container>
    )
}



export default Login;