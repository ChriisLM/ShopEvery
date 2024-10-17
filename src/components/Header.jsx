import { CarritoIcon, HeaderIcons } from '../utils/Icons'
import '../assets/css/Header.css'
import { useCart } from '../hooks/useCart';
import { useState } from 'react';
import { CarritoFloat } from './CarritoFloat';

export function Header () {
  const {cart} = useCart()
  const [show, setShow] = useState(false)
  const handleCartVisualized = () => {
    setShow(!show)
  }

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
        <CarritoIcon onclick={handleCartVisualized}/>
        {show && <CarritoFloat/>}
      </div>
    </header>
  );
};