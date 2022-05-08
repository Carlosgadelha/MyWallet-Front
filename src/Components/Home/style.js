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
        align-items: center;
        justify-content: center;
        background: #FFFFFF;
        border-radius: 5px;

        p{
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
            text-align: center;

            color: #868686;
        }
    }


`;

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

