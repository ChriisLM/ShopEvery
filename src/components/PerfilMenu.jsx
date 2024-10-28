import '../assets/css/PerfilMenu.css'
import { useAccess } from '../hooks/useAccess';

export function PerfilMenu ({showElement}) {
  const {loginChange} = useAccess()

  const toogleStatusMenu = () => {
    loginChange()
    showElement('perfil')
  }

  return (
    <div className='perfil-menu-section'>
      <div className='perfil-menu-container'>
        <span className='perfil-menu-item'>setting 1</span>
        <span className='perfil-menu-item'>setting 2</span>
        <span className='perfil-menu-item'>setting 3</span>
        <div onClick={() => toogleStatusMenu()} className='perfil-menu-button'>Cerrar Sesion</div>
      </div>
    </div>
  );
};