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



const App = () => {
  
  const [user, setUser] = useState(null)
  onAuthStateChanged(auth,(usuarioFirebase)=>{
    if(usuarioFirebase){
      setUser(usuarioFirebase)
    }else{
      setUser(null)
    }
  });
  //console.log(user)
  
  

  return (
    <AuthProvider>
    <Router basename={"/"}>
      <Routes >
        <Route path="/" element={<div className='Inicio'><InicioPage/></div>}/>
        <Route path="/registro" element={<div className='Registro'><RegistroPage/></div>}/>
        <Route path="/consulta" element={<div className='Consulta'><ConsultaPage /></div>}/>
      </Routes>
    </Router>
    
    </AuthProvider>
    
    
  )
}

// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from './firebase/firebase';
// import Loggin from './components/Inicio/Loggin';
// <button onClick={() => signOut(auth)}>Cerrar Sesion</button>

// const App = () => {
//   const [user, setUser] = useState(null)
//   onAuthStateChanged(auth,(usuarioFirebase)=>{
//     if(usuarioFirebase){
//       setUser(usuarioFirebase)
//     }else{
//       setUser(null)
//     }
//   });
//   console.log(user)
//   return (
//     // <AuthProvider>
//     <>
//       { user ? <ConsultaPage user={user}/>:<Loggin /> }</>
    
//   )
// }

export default App;
