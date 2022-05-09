import { Link, useNavigate } from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import Container from "./style";

function Cadastrar() {

    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [password, setPassword] = useState("");
    const [confirmacaoPassword, setConfirmacaoPassword] = useState("");

    const navigate = useNavigate();
    
    function cadastrar(){
        axios.post("https://back-wallett.herokuapp.com/cadastrar", {
            name: nome,
            email,
            senha: password,
            confirmacaoSenha: confirmacaoPassword
        }).then(res => {
            navigate("/");
        }).catch(err => {
            console.log(err);
        });
    }
    return(
        <Container>
            <h1>MyWallet</h1>
            < input type="input" placeholder="Nome"  onChange={ e => setNome(e.target.value)}></input>
            < input type="email" placeholder="E-mail" onChange={ e => setEmail(e.target.value)}></input>
            < input type="password" placeholder="Senha" onChange={ e => setPassword(e.target.value)}></input>
            < input type="password" placeholder="Confirme a senha" onChange={ e => setConfirmacaoPassword(e.target.value)}></input>
            < button type="submit" onClick={() => cadastrar()}>Cadastrar</button>
            <Link to= "/">
                <p>Já tem uma conta? Entre agora!</p>
            </Link>
        </Container>
    )
}

export default Cadastrar;