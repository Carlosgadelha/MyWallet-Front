import slyled from 'styled-components';

const Container = slyled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #8C11BE;

    font-family: 'Raleway';
    font-style: normal;

    h1{
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF;
        margin-bottom: 24px;
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

    p{
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;

        color: #FFFFFF;
    }

`;


export default Container;