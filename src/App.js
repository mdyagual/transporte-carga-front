import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ConsultaPage from './pages/ConsultaPage';
//import PokeHeader from './components/PokeHeader';
import InicioPage from './pages/InicioPage';
import RegistroPage from './pages/RegistroPage';


const App = () => {
  return (
    <>
    <Router basename={"/"}>
      <Routes >
        <Route path="/" element={<div className='Inicio'><InicioPage/></div>}/>
        <Route path="/registro" element={<div className='Registro'><RegistroPage/></div>}/>
        <Route path="/consulta" element={<div className='Consulta'><ConsultaPage/></div>}/>
      </Routes>
    </Router>
    
    </>
    
    
  )
}


export default App;
