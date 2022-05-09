
import Container from "./style";
import {useParams, useNavigate} from "react-router-dom"
import { useState } from "react";
import axios from "axios";


function Operacoes() {

    const [valor, setValor] = useState(0);
    const [descricao, setDescricao] = useState("");
    const {tipo} = useParams();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    function novaOperacao(){
        axios.post("http://localhost:3000/operacoes", {
            
            valor,
            descricao,
            type: tipo
            
        },{
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            console.log( "Operação realizada com sucesso!");
            navigate("/home");

        }).catch(err => {
            console.log(err);
        });
    }

    return(
        <Container>
            <h1>Nova {tipo} </h1>
            < input type="number" placeholder="Valor" min="0" step=".01" onChange={ e => setValor(e.target.value)}></input>
            < input type="input" placeholder="Descrição" onChange={ e => setDescricao(e.target.value)}></input>
            < button type="submit" onClick={() => novaOperacao()}>Salvar {tipo}</button>
        </Container>
    )
}

export default Operacoes;