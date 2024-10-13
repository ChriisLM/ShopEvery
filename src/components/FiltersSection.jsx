import { useState } from "react";
import '../assets/css/FiltersSection.css'

export function FilterSection ({filters}) {
  const [minPrice,setMinPrice] = useState(0)

  const handleChangeMinPrice = (event) => {
    const precioRange = event.target.value
    const precioFiltro = new Intl.NumberFormat('es-CO',{ style: 'currency', currency: 'COP' }).format(precioRange)
    setMinPrice(precioFiltro)
    filters(prevState => ({
      ...prevState,
      minPrice: precioRange
    }))
  }
  
  const handleChangeCategory = (event) => {
    filters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }


  return (
    <section className="filters-section">
      <div className="priceFilter-container">
        <label htmlFor="price">Precio Minimo</label>
        <input type="range" name="price" id="price" min={0} max={2000000} onChange={handleChangeMinPrice}/>
        <span>{minPrice}</span>
      </div>
      <div className="categoryFilter-container">
        <label htmlFor="category">Categoria</label>
        <select name="category" id="category" onChange={handleChangeCategory}>
          <option value="all">Todos</option>
          <option value="Ropa">Ropa</option>
          <option value="Calzado">Calzado</option>
          <option value="Electronica">Electronica</option>
          <option value="Accesorios">Accesorios</option>
          <option value="Hogar">Hogar</option>
          <option value="Muebles">Muebles</option>
          <option value="Belleza">Belleza</option>
          <option value="Deportes">Deportes</option>
          <option value="Transporte">Transporte</option>
          <option value="Cocina">Cocina</option>
          <option value="Juguetes">Juguetes</option>
          <option value="Arte">Arte</option>
          <option value="Aventura">Aventura</option>
          <option value="Oficina">Oficina</option>
        </select>
      </div>
    </section>
  );
};