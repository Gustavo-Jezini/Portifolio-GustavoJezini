import './App.css';
import Header from './Header';
import NavBar from './NavBar';
import Objetivos from './Objetivos';
import Projetos from './Projetos';
import Tecnologias from './Tecnologias';

function Principal() {
  return (
    <>
    <NavBar/>
    <Header/>
    <Tecnologias/>
    <Projetos/>
    <Objetivos/>
    </>
  );
}

export default Principal;
