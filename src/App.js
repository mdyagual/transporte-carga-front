import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ConsultaPage from './pages/ConsultaPage';
//import PokeHeader from './components/PokeHeader';
import InicioPage from './pages/InicioPage';
import RegistroPage from './pages/RegistroPage';
import { AuthProvider } from './context/authContext';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import ConsultaPerfil from './components/Consulta/ConsultaPerfil';


const App = () => {
  const [user, setUser] = useState(null)
  onAuthStateChanged(auth,(usuarioFirebase)=>{
    if(usuarioFirebase){
      setUser(usuarioFirebase.email)
    }else{
      setUser(null)
    }
  });
  return (

    <AuthProvider>
    <Router basename={"/"}>
      <Routes >
        <Route path="/" element={<div className='Inicio'><InicioPage/></div>}/>
        <Route path="/registro" element={<div className='Registro'><RegistroPage/></div>}/>
        <Route path="/consulta" element={<div className='Consulta'><ConsultaPage/></div>}/>
        <Route path="/perfil" element={<div className='Inicio'><ConsultaPerfil user={user}/></div>}/>
      </Routes>
    </Router>
    
    </AuthProvider>
    
    
  )
}

export default App;
