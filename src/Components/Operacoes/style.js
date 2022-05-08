import slyled from 'styled-components';

const Container = slyled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    background-color: #8C11BE;

    font-family: 'Raleway';
    font-style: normal;

    h1{
        width: 90%;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
        margin-top: 25px;
        margin-bottom: 40px;
    }

    input{
        width: 90%;
        height: 58px;
        background: #FFFFFF;
        border: none;
        border-radius: 5px;
        margin-bottom: 13px;

        text-indent: 15px;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;

    }

    input::placeholder{
        text-indent: 15px;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
    }

    button{
        width: 90%;
        height: 46px;
        background: #A328D6;
        border-radius: 5px;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        border: none;
        color: #FFFFFF;
        margin-bottom: 24px;
    }

`;


export default Container;