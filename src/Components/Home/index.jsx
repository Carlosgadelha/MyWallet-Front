import {Container, Opcoes, ConteudoRegistro} from "./style";
import { IoShareOutline,IoAddCircleOutline,IoRemoveCircleOutline } from "react-icons/io5";
import {useNavigate} from "react-router-dom";
import { useState, useEffect} from "react";
import axios from "axios";


function Home() {
    const navigate = useNavigate();
    const name = localStorage.getItem('name');
    const token = localStorage.getItem('token');
    const [operacoes, setOperacoes] = useState([]);
    const [saldo, setSaldo] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:3000/operacoes",{
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(res => {
            setOperacoes(res.data.operacoes);
            setSaldo(res.data.saldo);

        }).catch(err => {
            console.log(err);
        });
    }, [])

    function logout(){
        localStorage.removeItem('name');
        localStorage.removeItem('token');
        navigate('/');
    }

    return(
        <Container itens={operacoes.length} valor={saldo}>
            <div className="header">
                <h1>Olá, {name}</h1>
                <IoShareOutline  className="icon" onClick={() => logout()}/>
            </div>
            
            <div className="registros">
                {operacoes.map(operacao => {
                    
                    return < Registro key={operacao.id} date={operacao.date} titulo={operacao.descricao} valor={operacao.valor} type ={operacao.type}/>
                })}
                {operacoes.length === 0 ? 
                        <p className="tituloNaoHaRegistro">Não há registros de <br/> entrada ou saída</p>
                    : 
                        <div className="saldo">
                            <p>SALDO</p>
                            <p className="valorSaldo">{saldo}</p>
                        </div>
                }
                
            </div>
            <Opcoes>
                
                <button type="submit" onClick={() => navigate("/operacoes/entrada")}>

                    <IoAddCircleOutline className="icon"/>
                    <p>Nova <br/>entrada</p>

                </button>
                        
                <button type="submit" onClick={() => navigate("/operacoes/saída")}>
                    
                    <IoRemoveCircleOutline className="icon"/>
                    <p>Nova <br/>saida</p> 
                    
                </button>
                
            </Opcoes>
            
        </Container>
    )
}
function Registro(props){
    console.log(props.type)
    return(
        <ConteudoRegistro  tipo ={props.type}>
            <div className="infos">
                <p>{props.date}</p>
                <p>{props.titulo}</p>
            </div>
            <p className="valor">{props.valor}</p>
        </ConteudoRegistro>
    )
}
export default Home;