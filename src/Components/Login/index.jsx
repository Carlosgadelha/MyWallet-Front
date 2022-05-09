import { Link } from "react-router-dom";
import Container from "./style";
import { useState } from "react";   
import { useNavigate } from "react-router-dom"
import axios from "axios";

function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function logar(){
        axios.post("https://back-wallett.herokuapp.com/login", {
            email,
            senha: password
        }).then(res => {
            console.log(res.data);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('name', res.data.name);
            navigate("/home");
        }).catch(err => {
            console.log(err);
            setEmail("");
            setPassword("");
            alert("Login ou senha incorretos!");
        });
    }
    return(
        <Container>
            <h1>MyWallet</h1>
            < input type="email" placeholder="Email" onChange={ e => setEmail(e.target.value)}></input>
            < input type="password" placeholder="Senha" onChange={ e => setPassword(e.target.value)}></input>
            < button type="submit" onClick={()=> logar()}>Entrar</button>
            <Link to= "./Cadastrar">
                <p>Primeira vez? Cadastre-se!</p>
            </Link>
        </Container>
    )
}



export default Login;