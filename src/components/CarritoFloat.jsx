import { useCart } from "../hooks/useCart";
import { CarritoVacio, DeleteItemsCart } from '../utils/Icons'
import '../assets/css/CarritoFloat.css'

export function CarritoFloat() {
  const { cart, clearCart } = useCart();

  function priceFormat(price){
    return new Intl.NumberFormat('es-CO',{ style: 'currency', currency: 'COP' }).format(price);
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
              style={{ backgroundColor: '#fdfd96' }}
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
