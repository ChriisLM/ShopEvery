import { useCart } from "../hooks/useCart";
import { CarritoVacio, DeleteItemsCart } from '../utils/Icons'
import '../assets/css/CarritoFloat.css'

export function CarritoFloat() {
  const { cart, removeFromCart, clearCart } = useCart();

  function priceFormat(price){
    return new Intl.NumberFormat('es-CO',{ style: 'currency', currency: 'COP' }).format(price);
  }

  const handleChoiceColorDiv =()=>{
    const colors = ['C8A2C8','FFD07B','98FB98','87CEFB','FDFD96']
    const randomColor = colors[Math.floor(Math.random()* (4 + 1))]
    return randomColor
  }

  const clearCarrito = () => {
    clearCart()
  }

  return (
    <div className="carrito-section">
      <div className="carrito-items-container">
        {cart.length == 0 ? <span className="carrito-vacio"><CarritoVacio/></span>  :cart.map((product) => (
          <article className="carrito-item" key={product.id}>
            <div
              className="carrito-item-image-container"
              style={{ backgroundColor: `#${handleChoiceColorDiv()}` }}
            >
              <img src={product.imagen} alt={product.nombre} />
            </div>
            <div className="carrito-item-description">
              <h3>{product.nombre}</h3>
              <span>{priceFormat(product.precio)}</span>
              <span>{product.cantidad}</span>
            </div>
          </article>
        ))}
        <div className="clearCart-container" onClick={clearCarrito}>
          <DeleteItemsCart />
        </div>
      </div>
    </div>
  );
}
