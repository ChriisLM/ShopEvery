import { CardProducto } from "../components/CardProducto";
import products from "../data/productos.json";
import '../assets/css/Home.css'
import { useState } from "react";
import { FilterSection } from "../components/FiltersSection";

export function Home() {
  const [productos,setProductos] = useState(products);
  const [filters,setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (productos) =>{
    return productos.filter(producto =>
      producto.precio >= filters.minPrice && (
        producto.categoria == filters.category || filters.category == 'all'
      )
    )
  }

  const filteredProducts = filterProducts(productos);

  return (
    <div className="container">
      <h1>Productos</h1>
      <FilterSection filters={setFilters}/>
      <section className="productos-container">
        {filteredProducts.slice(0,9).map((productoInfo) => (
          <CardProducto key={productoInfo.id} producto={productoInfo} />
        ))}

      </section>
    </div>
  );
}
