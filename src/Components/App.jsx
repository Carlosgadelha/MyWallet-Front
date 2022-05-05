import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Login from './Login';
import Cadastrar from './Cadastrar';
import '../css/reset.css';
import Home from './Home';


function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastrar" element={<Cadastrar />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;