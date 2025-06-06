import React from 'react';
import perfilImg from '../../assets/img/pfp.jpg'; // ajustá el path si es necesario
import './Perfil.css';

function Perfil() {
  return (
    <div className="perfil-container">
      <img src={perfilImg} alt="Foto de perfil" className="perfil-img" />
    </div>
  );
}

export default Perfil;
