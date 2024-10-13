import { HeaderIcons } from '../utils/Icons'
import '../assets/css/Header.css'

export function Header () {
  return (
    <header>
      <div className='header-title-container'>
        <h1>every</h1>
      </div>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Categorias</li>
          <li>Nosotros</li>
          <li>Contacto</li>
        </ul>
      </nav>
      <div className='icons-container'>
        <HeaderIcons/>
      </div>
    </header>
  );
};