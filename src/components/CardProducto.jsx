import '../assets/css/CardProducto.css'
import { useCart } from '../hooks/useCart'
import { IconCarritoCard, IconCarritoCardRemove } from '../utils/Icons'

export function CardProducto ({producto,productInCart}) {
  const {cart,addToCart,removeFromCart} = useCart()


  const handleChoiceColorDiv =()=>{
    const colors = ['C8A2C8','FFD07B','98FB98','87CEFB','FDFD96']
    const randomColor = colors[Math.floor(Math.random()* (4 + 1))]
    return randomColor
  }

  const precioProducto = new Intl.NumberFormat('es-CO',{ style: 'currency', currency: 'COP' }).format(producto.precio)
  
  return (
    <div className='card-container'>
      <div className='card-image-container' style={{backgroundColor:`#${handleChoiceColorDiv()}`}}>
        <img src={producto.imagen} alt={producto.nombre} />
      </div>
      <div className='card-info-container'>
        <h2>{producto.nombre}</h2>
        <p>{precioProducto}</p>
      </div>
      <div className='card-carrito-container'>
        <div className='button-carrito' onClick={() => {productInCart ? removeFromCart(producto) : addToCart(producto)}}>
          {productInCart ? <IconCarritoCardRemove/> : <IconCarritoCard/> }   
        </div>
      </div>
    </div>
  );
};