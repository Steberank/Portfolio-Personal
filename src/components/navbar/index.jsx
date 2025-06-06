import './navbar.css';
import { useState, useEffect } from 'react';
import Logo from '../../components/logo';

function Navbar({ izquierda = [], derecha = [] }) {
  const [sidebarAbierta, setSidebarAbierta] = useState(false);
  const [mostrarNavbarVerde, setMostrarNavbarVerde] = useState(false);

  const toggleSidebar = () => {
    setSidebarAbierta(!sidebarAbierta);
  };

  useEffect(() => { //MOSTRAR/OCULTAR NAVBAR VERDE
    let ultimaPosY = window.scrollY;

    const handleScroll = () => {
      const nuevaPosY = window.scrollY;
      const umbral = 300;

      // Si se scrollea hacia abajo y pasa el umbral
      if (nuevaPosY > umbral && nuevaPosY > ultimaPosY) {
        setMostrarNavbarVerde(true);
      }

      // Si se vuelve al tope de la página
      if (nuevaPosY <= 10) {
        setMostrarNavbarVerde(false);
      }

      ultimaPosY = nuevaPosY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { //OCULTA/MUESTRA EL BOTON HAMBURGESA SEGUN EL SCROLL
  const hamburguesa = document.querySelector(".hamburger-button");
  if (!hamburguesa) return;

  let ultimaPosY = window.scrollY;

  const handleScroll = () => {
    const esMobile = window.innerWidth < 790;

    if (!esMobile || sidebarAbierta) return;

    const nuevaPosY = window.scrollY;

    if (nuevaPosY > ultimaPosY) {
      hamburguesa.classList.add("oculto");
    } else {
      hamburguesa.classList.remove("oculto");
    }

    ultimaPosY = nuevaPosY;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [sidebarAbierta]);

useEffect(() => { //ACTIVA O DESACTIVA SCROLL EN SIDEBAR
  if (sidebarAbierta) {
    document.body.style.overflow = 'hidden'; // desactiva scroll
  } else {
    document.body.style.overflow = 'auto';   // reactiva scroll
  }

  // Limpieza por seguridad
  return () => {
    document.body.style.overflow = 'auto';
  };
}, [sidebarAbierta]);


  return (
    <>
      {/* NAVBAR VERDE */}
      <div className={`navbar-verde ${mostrarNavbarVerde ? 'visible' : ''}`}>
        <nav className="navbar-verde-interno">
          <ul className="navbar-left">
            {izquierda.map((Elemento, index) => (
              <li key={`verde-izq-${index}`} className={Elemento.props?.className || ''}>
                {Elemento}
              </li>
            ))}
          </ul>
          <ul className="navbar-right">
            {derecha.map((Elemento, index) => (
              <li key={`verde-der-${index}`} className={Elemento.props?.className || ''}>
                {Elemento}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* NAVBAR ORIGINAL */}
      <nav className="navbar">
        <ul className="navbar-left">
          {izquierda.map((Elemento, index) => (
            <li key={`izq-${index}`} className={Elemento.props?.className || ''}>
              {Elemento}
            </li>
          ))}
        </ul>
        <ul className="navbar-right">
          {derecha.map((Elemento, index) => (
            <li key={`der-${index}`} className={Elemento.props?.className || ''}>
              {Elemento}
            </li>
          ))}
        </ul>
      </nav>

      {/* BOTÓN HAMBURGUESA */}
      <button className="hamburger-button" onClick={toggleSidebar}>
        {sidebarAbierta ? 'X' : '☰'}
      </button>

      {/* SIDEBAR PARA MÓVILES */}
      <div className={`mobile-sidebar ${sidebarAbierta ? 'abierta' : ''}`}>
        <div className="sidebar-logo">
          <Logo />
        </div>

        <ul className="sidebar-links">
          {izquierda.map((Elemento, index) => (
            <li
              key={`sidebar-${index}`}
              className={Elemento.props?.className || ''}
              onClick={() => setSidebarAbierta(false)}
            >
              {Elemento}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
