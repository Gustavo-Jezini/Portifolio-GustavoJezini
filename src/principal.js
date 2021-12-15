import './App.css';
import Footer from './Footer';
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
    <Footer />
    </>
  );
}

export default Principal;
