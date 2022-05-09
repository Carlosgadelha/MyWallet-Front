import slyled from 'styled-components';

export const Container = slyled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #8C11BE;

    font-family: 'Raleway';
    font-style: normal;

    .header{
        display: flex;
        align-items: center;
        margin-top: 25px;
        margin-bottom: 22px;
        width: 90%;
        justify-content: space-between;
        color: #FFFFFF;
        
        h1{
            font-family: 'Raleway';
            font-style: normal;
            ffont-weight: 700;
            font-size: 26px;
            line-height: 31px;
            
            
        }

        .icon{
            font-size: 26px;
            transform: rotate(90deg);

        }
    }

    .registros{
        width: 90%;
        height: 100%;
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        justify-content: ${props => props.itens === 0 ? 'center' : ''};
        background: #FFFFFF;
        border-radius: 5px;

        .tituloNaoHaRegistro{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            text-align: center;

            color: #868686;
        }



        .saldo{
            width: 90%;
            display: flex;
            justify-content: space-between;
            position: absolute;
            bottom: 23px;
            left: 5%;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 700;
            font-size: 17px;
            line-height: 20px;
            color: #000000;
            

            .valorSaldo{
                color: ${props => props.valor > 0? '#03AC00' : '#C70000'};
            }
        }
    }


`;

export const ConteudoRegistro = slyled.div`

    width: 90%;
    display: flex;
    justify-content: space-between;

    .infos{
        display: flex;
    }

    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
        
        
        &:first-child{
            color: #868686;
            margin-right: 10px;
        }
    
    }

    .valor{
        
        color: ${props => props.tipo === 'entrada' ? '#03AC00' : '#C70000'};
        
    }

    &:first-child{
        margin-top: 23px;
    } 

`


export const Opcoes = slyled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin-top: 13px;

    button{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 49%;
        height: 114px;
        background: #A328D6;
        text-align: start;
        border-radius: 5px;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        border: none;
        color: #FFFFFF;
        margin-bottom: 16px;

        .icon{
            font-size: 26px;
        }
    }

    .btn-operacoes{
        color: #FFFFFF;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        height: 100%;
    }
`;

