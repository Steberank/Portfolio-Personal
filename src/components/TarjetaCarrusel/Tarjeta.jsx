import './tarjeta.css';
import '../../i18n/i18n.js';
import { useTranslation } from 'react-i18next';


function Tarjeta({ imagen, titulo, descripcion, link1, link2 }) {
  const { t } = useTranslation();

  return (
    <div className="tarjeta">
      <img src={imagen} alt={titulo} className="tarjeta-img" />
      <div className="tarjeta-body">
        <div className="tarjeta-header">
          <h5 className="tarjeta-titulo">{titulo}</h5>
          <a href={link1} className="boton-primario">{t('iniciar')}</a>
        </div>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <div className="tarjeta-botones">
          <a href={link2} className="boton-secundario">{t('codigofuente')}</a>
        </div>
      </div>
    </div>
  );
}

export default Tarjeta;
