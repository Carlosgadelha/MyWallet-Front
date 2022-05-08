import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Login from './Login';
import Cadastrar from './Cadastrar';
import '../css/reset.css';
import Home from './Home';
import Operacoes from './Operacoes';


function App(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastrar" element={<Cadastrar />} />
                <Route path="/home" element={<Home />} />
                <Route path="/operacoes/:tipo" element={<Operacoes />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;